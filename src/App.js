import "./App.css";
import AddContacts from "./AddContacts";
import { Routes, Route, useParams } from "react-router-dom";
import Profile from "./Profile";
import ContactsList from "./ContactsList";
import { useState, useEffect } from "react";
// import logo from "./logo.svg";
function App() {
  const LOCAL_STORAGE_KEY = "users";
  const retrievedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [users, setUsers] = useState(retrievedUsers);
  let { userId } = useParams();
  console.log(users);

  const onAddNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  const deleteUserHandler = (userID) => {
    setUsers(users.filter((user) => user.id !== userID));
  };
  // useEffect(() => {
  //   const retrievedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrievedUsers) setUsers(retrievedUsers);
  // }, []);
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
            <ContactsList users={users} deleteUserHandler={deleteUserHandler} />
          }
        />
        {/* {`/User:${userId}`} */}
        {/* <Route path={`/User/:${userId}`} element={<Profile />} /> */}
        <Route path="/User/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
