// import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';
// import { Card, Image } from 'react-bootstrap';
// // import './App.css';

// function Flogin() {

//   const [login, setLogin] = useState(false);
//   const [data, setData] = useState({});
//   const [picture, setPicture] = useState('');

//   const responseFacebook = (response) => {
//     console.log(response);
//     setData(response);
//     setPicture(response.picture.data.url);
//     if (response.accessToken) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }

//   return (
//     <div class="container">
//       <Card style={{ width: '600px' }}>
//         <Card.Header>
//           { !login && 
//             <FacebookLogin
//               appId="992489677898965"
//               autoLoad={true}
//               fields="name,email,picture"
//               scope="public_profile,user_friends"
//               callback={responseFacebook}
//               icon="fa-facebook" />
//           }
//           { login &&
//             <Image src={picture} roundedCircle />
//           }
//         </Card.Header>
//         { login &&
//           <Card.Body>
//             <Card.Title>{data.name}</Card.Title>
//             <Card.Text>
//               {data.email}
//             </Card.Text>
//           </Card.Body>
//         }
//       </Card>
//     </div>
//   );
// }

// export default Flogin;
import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
    console.log(response);
}
class Flogin extends React.Component {


    render() {
        return (
            //   <FacebookLogin
            //     appId="1088597931155576"
            //     autoLoad={true}
            //     fields="name,email,picture"
            //     scope="public_profile,user_friends,user_actions.books"
            //     callback={this.responseFacebook}
            //   />
            <FacebookLogin
                appId="992489677898965"
                autoLoad={true}
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick} >
                    <i class="fab fa-facebook-f"></i>Sign In
                    with Facebook
                    </button>
                )}
            />
        )
    }
}

export default Flogin;