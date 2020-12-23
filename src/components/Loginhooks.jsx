import React from "react";
import Button from "react-bootstrap/Button";
import { useGoogleLogin } from "react-google-login";

// refresh token
// import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId =
  "558389095406-a9oivj1kskvd80826acjkqdj52c6bffr.apps.googleusercontent.com";

function LoginHooks() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} . \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login.  Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Button class="btn btn-primary" block size="lg" onClick={signIn}>
      <i class="fa fa-google fa-fw"></i>
      <span className="buttonText">Sign in with Google</span>
    </Button>
    // <button onClick={signIn} className="button">
    //   <img src="icons/google.svg" alt="" className="icon"></img>

    //   <span className="buttonText">Sign in with Google</span>
    //   </button>
  );
}

export default LoginHooks;
