import { Navigate } from "react-router-dom";



export const TransferToLoginPage = ({children}) => {
let checkLoginPresence = JSON.parse(sessionStorage.getItem('token'));
return checkLoginPresence ? children : <Navigate to='/login'/>

}


