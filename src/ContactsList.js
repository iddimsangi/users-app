import Contact from "./Contact";
import { Link } from "react-router-dom";
import Button from "./Button";
function ContactsList({ users, deleteUserHandler }) {
  return (
    <div>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>

      <div className="ui fluid icon input">
        <input type="text" placeholder="Search..." />
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
