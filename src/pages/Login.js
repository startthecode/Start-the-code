import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {

    let navigate = useNavigate()
let emailRef = useRef();
let passwordRef = useRef();


async function submitHandle(e) {

e.preventDefault()

let authDetails = {
    email:emailRef.current.value,
    password:passwordRef.current.value
}

let requestDetails = await fetch(`${process.env.REACT_APP_HOST}/login`,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(authDetails)
})
let loginResponse = await requestDetails.json()

loginResponse.accessToken ? navigate('/') : toast.error(loginResponse)

if(loginResponse.accessToken){
    sessionStorage.setItem('token', JSON.stringify(loginResponse.accessToken))
    sessionStorage.setItem('stcID', JSON.stringify(loginResponse.user.id))

}
  }
    
  return (
    <>
  
<form className="container max-w-[600px] mx-auto my-20" onSubmit={submitHandle}>




  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" ref={emailRef} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password"  ref={passwordRef} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
 
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
</form>

  </>
  )
}

