// import React, { Component } from 'react';

// class Login extends Component {
//     confirmation (a) {
//         a.preventDefault()

//         const data = {
//             'name': this.loginName.value,
//             'password': this.loginPassword.value,
//         } 
//         axios({
//             method: 'post',
//             url: 'myProfile',
//             data: bodyFormData,
//             config: { headers: {'Content-Type': 'multipart/form-data' }}
//         })
//             .then(function (response) {
//                 //handle success
//                 console.log(response);
//             })
//             .catch(function (response) {
//                 //handle error
//                 console.log(response);
//             });
//         }

//     render () {
//         return (
//             <div>
//                 <form onSubmit={this.confirmation.bind(this)}>
//                     <label>
//                         Username:
//                         <input type="text" ref ={node =>this.loginName = node} />
//                     </label>
//                     <label>
//                         Password:
//                         <input type="text" ref ={node =>this.loginPassword = node} />
//                     </label>
//                   <input type="submit" value ="Submit"/>  
//                 </form>
//             </div>
//         )
//     }
//  };

// export default Login;