import { Link } from "react-router-dom";

function Contact({ user, deleteUserHandler }) {
  const { id, fullName, email } = user;
  return (
    <div>
      <div
        className="list"
        style={{
          marginTop: "1rem",
          border: "1px solid #ccc",
          padding: "5px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <div className="ui relaxed divided list">
          <div
            className="item"
            key={id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className="large github middle aligned icon"></i>

            <div className="content">
              <Link to={`/User/:${id}`} state={user}>
                <a href="#" className="header">
                  {fullName}
                </a>
              </Link>
              <div className="description">{email}</div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <Link to={"/Edit"} state={user}>
                <i
                  className="edit icon  middle aligned"
                  style={{
                    color: "blue",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                ></i>
              </Link>

              <i
                className="trash alternate  icon content middle aligned"
                style={{
                  color: "red",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => deleteUserHandler(id)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
