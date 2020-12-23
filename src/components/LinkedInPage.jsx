import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import { LinkedIn } from "react-linkedin-login-oauth2";

class LinkedInPage extends Component {
  state = {
    code: "",
    errorMessage: "",
  };

  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: "",
    });
  };

  handleFailure = (error) => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
    });
  };

  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="81lx5we2omq9xh"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
          renderElement={({ onClick, disabled }) => (
            <Button
              class="btn btn-primary d-flex flex-row"
              block
              size="lg"
              onClick={onClick}
            >
              <i class="fa fa-linkedin-square" aria-hidden="true"></i> Sign In
              With Linkedin
            </Button>
            // <button onClick={onClick} >
            // <i class="fab fa-linkedin-in"></i>
            // Sign In With linkedin
            // </button>
          )}
        />

        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
