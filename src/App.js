import "./App.css";
import AddContacts from "./AddContacts";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import ContactsList from "./ContactsList";
import EditContacts from "./EditContacts";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const retrievedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [users, setUsers] = useState(retrievedUsers);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const baseURL = "http://localhost:3030/users";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  const onAddNewUser = async (newUser) => {
    const newUserPost = await axios.post(baseURL, newUser);
    setUsers([newUserPost.data, ...users]);
  };
  const deleteUserHandler = async (userID) => {
    await axios.delete(`${baseURL}/${userID}`);
    setUsers(users.filter((user) => user.id !== userID));
  };
  const onUpdateUser = async (updatedUser) => {
    const updatedUserResponse = await axios.put(
      `${baseURL}/${updatedUser.id}`,
      updatedUser
    );
    setUsers(
      users.map((usr) =>
        usr.id === updatedUser.id ? { ...updatedUserResponse.data } : usr
      )
    );
  };
  const searchHandler = (searchWord) => {
    setSearchKeyWord(searchWord);
    if (searchKeyWord !== "") {
      let result = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase());
      });
      setSearchResults(result);
    } else {
      setSearchResults(users);
    }
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddContacts onAddNewUser={onAddNewUser} />} />
        <Route
          path="/List"
          element={
            <ContactsList
              users={searchResults.length < 1 ? users : searchResults}
              deleteUserHandler={deleteUserHandler}
              searchKeyWord={searchKeyWord}
              searchHandler={searchHandler}
            />
          }
        />
        <Route path="/User/:id" element={<Profile />} />
        <Route
          path="/Edit"
          element={<EditContacts onUpdateUser={onUpdateUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
