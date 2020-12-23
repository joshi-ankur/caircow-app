//
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Loginhooks from './Loginhooks';
import Flogin from './Flogin';
import Linklogin from "./Linklogin";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  function validateForm() {
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("I am fired");
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>Logo</Grid>
        <Grid item xs={6}>
          <h1>Welcome ..</h1>
          <h3>Hire The Best Freelancers Online For Any Local Job</h3>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
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
                <h3>----------- or -----------</h3>
                <Loginhooks></Loginhooks>
                <Flogin></Flogin>
                <Linklogin></Linklogin>
                <h3>
                  New To Kierkou ? <a href="#" style={{ color: '#f06a3a' }}>Sign Up</a>
                </h3>
              </Form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
