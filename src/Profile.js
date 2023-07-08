import { Card, Icon } from "semantic-ui-react";
import { useLocation, Link } from "react-router-dom";
import lg from "./logo.svg";
import Button from "./Button";
function Profile() {
  // let params = useParams();
  // console.log(params);
  const location = useLocation();
  const { email, fullName } = location.state;
  console.log(email, fullName);
  console.log(location);
  const extra = (
    <a href="#">
      <Icon name="user" />
      16 Friends
    </a>
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        image={lg}
        header={fullName}
        meta={email}
        description="Who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
      <Link to={"/List"}>
        <Button>Back to List</Button>
      </Link>
    </div>
  );
}

export default Profile;
