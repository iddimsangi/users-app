import Contact from "./Contact";
import { Link } from "react-router-dom";
import Button from "./Button";
function ContactsList({
  users,
  deleteUserHandler,
  searchKeyWord,
  searchHandler,
}) {
  const onSearchHandler = (e) => {
    e.preventDefault();
    searchHandler(e.target.value);
  };
  return (
    <div>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>

      <div className="ui fluid icon input">
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyWord}
          onChange={onSearchHandler}
        />
        <i aria-hidden="true" className="search icon"></i>
      </div>
      {users.map((user) => (
        <Contact
          user={user}
          key={user.id}
          deleteUserHandler={deleteUserHandler}
        />
      ))}
    </div>
  );
}

export default ContactsList;
