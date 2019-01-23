// import React, { Component } from 'react';
// import FacebookLogin from 'react-facebook-login';
// import keys from "../../keys";


// class Facebook extends Component {

//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         isAuthenticated: false,
//     //         isLoggedIn: false,
//     //         user: null,
//     //         token: ''
//     //     }

//         // logout = (obj) => {
//         //     this.setState({ isAuthenticated: false, token: '', user: null, isLoggedIn: false, showModal: false })
//         //     console.log(obj + "\nlogged out");
//         // };
    

//     facebookResponse = (response) => {
//         console.log(response);
//         const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
//         const options = {
//             method: 'POST',
//             body: tokenBlob,
//             mode: 'cors',
//             cache: 'default'
//         };
//         fetch('http://localhost:3001/api/v1/auth/facebook', options).then(r => {//unexpected token > at JSON position 0
//             const token = r.headers.get('x-auth-token');
//             r.json().then(user => {//unexpected token > at JSON position 0
//                 if (token) {
//                     this.setState({ isAuthenticated: true, user, token })
//                     console.log("State changed");
//                 }
//             });
//         })
//     };

//     render() {

//         let content = !!this.state.isAuthenticated ? (
//             <div>
//                 <p>Authenticated.</p>
//                 <div>
//                     {this.state.user.email}
//                 </div>
//                 {/* <div>
//                     <button onClick={this.logout} className="button">Log Out</button>
//                 </div> */}
//             </div>
//         ) : (
//                 <div>
//                     <FacebookLogin
//                         appId={keys.facebook.appId}
//                         autoLoad={false}
//                         fields="name,email,picture"
//                         callback={this.facebookResponse}
//                     />
//                 </div>
//             );
//         return (

//             <div>
//                 {content}
//             </div>
//         )
//     }
// }

// export default Facebook;