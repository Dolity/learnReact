// import { useContext } from "react";
// import { AuthContext } from "./App";

// const fakeUser = { username: 'nice789', fullname: 'Nicky' };

// function LoginBox() {
//     const { authState, authDispatch } = useContext(AuthContext);

//     function loginSubmit(event) {
//         event.preventDefault();
//         authDispatch({ type: 'login', payload: fakeUser })
//     }

//     function logoutSubmit() {
//         authDispatch({ type: 'logout' });
//     }

//     if (!!authState) {
//         return (
//             <div>
//                 <p>Auth username = {authState.username}</p>
//                 <p>Auth fullname = {authState.fullname}</p>
//                 <p><button onClick={logoutSubmit}>Log out</button></p>
//             </div>
//         );
//     }

//     return (
//         <form onSubmit={loginSubmit}>
//             <p><input tpye="text" placeholder="username"></input></p>
//             <p><input tpye="password" placeholder="password"></input></p>
//             <p><button>Log in</button></p>
//         </form>
//     )
// }

// export default LoginBox;