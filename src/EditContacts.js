import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import logo from "./logo.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function EditContacts({ onUpdateUser }) {
  const location = useLocation();
  //   const { id, fullName, emailUpdate, passwordUpdate } = location.state;

  console.log(location.state);
  const [name, setName] = useState(location.state.fullName);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  let navigate = useNavigate();

  const formUpdateHandler = (e) => {
    e.preventDefault();
    let user = {
      id: location.state.id,
      fullName: name,
      email: email,
      password: password,
    };

    onUpdateUser(user);
    setName("");
    setEmail("");
    setPassword("");
    navigate("/List");
  };
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} /> Edit Registration
          </Header>
          <Form size="large" onSubmit={formUpdateHandler}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button color="teal" fluid size="large">
                Update
              </Button>
            </Segment>
          </Form>
          {/* <Message>
            New to us? <a href="#">Sign Up</a>
          </Message> */}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default EditContacts;
