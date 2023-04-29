import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export const Register = () => {
    let naviagte = useNavigate()

async function submmitHandler(e){
    e.preventDefault()
let userDetails = {
    name:e.target.usename.value,
    email:e.target.email.value,
    password:e.target.password.value,
}
let sendRequest = await fetch(`${process.env.REACT_APP_HOST}/register`,{
    method:"POST",
    headers:{"content-type": "application/json"},
    body:JSON.stringify(userDetails)
})
let recievedData = await sendRequest.json() 

recievedData.accessToken ? naviagte('/') : toast.error(recievedData)
sessionStorage.setItem('token', JSON.stringify(recievedData.accessToken))
sessionStorage.setItem('stcID', JSON.stringify(recievedData.user.id))


}
    
  return (
  <>
  

  
<form className="container max-w-[600px] mx-auto my-20" onSubmit={submmitHandler}>


<div className="mb-6 ">
    <label htmlFor="usename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your usename</label>
    <input type="text" id="usename" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required />
  </div>



  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
 
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

  </>
  )
}


