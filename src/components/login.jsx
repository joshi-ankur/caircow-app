//
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    if (email.length > 0) {
      return true;
    } else {
      return false;
    }
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("I am fired");
  }

  return (
    <div>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              placeholder="username or email"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group> */}
          <Button
            className="btn btn-secondary"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Continue
          </Button>
          {/* <br></br> */}
          {/* <Divider variant="middle" /> */}
          {/* <div>Or</div> */}
        </Form>
      </div>
    </div>
  );
}
