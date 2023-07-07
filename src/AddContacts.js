import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import logo from "./logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddContacts({ onAddNewUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let user = {
      id: crypto.randomUUID(),
      fullName: name,
      email: email,
      password: password,
    };

    onAddNewUser(user);
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
            <Image src={logo} /> Contacts Registration
          </Header>
          <Form size="large" onSubmit={formSubmitHandler}>
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button color="teal" fluid size="large">
                Register
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

export default AddContacts;
