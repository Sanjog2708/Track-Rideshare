import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData] = useState({});


  const handleSubmit = (e)=>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstname:firstName,
        lastname:lastName,
      }, 
      email:email,
      password:password
    });
    setEmail('');
    setFirstName('');
    setPassword('');
    setLastName('');
  }
 

  return (
    <div className='p-7 bg-zinc-900 text-white h-screen flex flex-col gap-12'>
    <h1 className='text-3xl font-bold text-center'>Register</h1>
    <form className='flex flex-col justify-between h-full' onSubmit={(e)=>handleSubmit(e)}>
      <div>
          <div>
              <h3 className='text-lg mb-2'>What's your Name</h3>
              <div className='flex gap-3'>
                <input 
                type="text" 
                className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-[48%] py-[0.5rem] outline-none  mb-6 ' 
                placeholder='First Name'
                value={firstName} 
                onChange={(e)=>{setFirstName(e.target.value)}}
                required
                />
                <input 
                type="text" 
                className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-[48%] py-[0.5rem] outline-none mb-6 ' 
                placeholder='Last Name' 
                value={lastName} 
                onChange={(e)=>{setLastName(e.target.value)}}
                required
                />
              </div>
             
              <h3 className='text-lg mb-2'>What's your email</h3>
              <input 
              type="email" 
              className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.5rem] outline-none  mb-6 ' 
              placeholder='johndoe@gmail.com' 
              value={email} 
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              />
              <h3 className='text-lg mb-2'>Enter Password</h3>
              <input 
              type="password" 
              className='bg-zinc-700 border border-gray-500 rounded-md px-3 w-full py-[0.5rem] outline-none' 
              placeholder='Enter your password' 
              value={password} 
              onChange={(e)=>{setPassword(e.target.value)}}
              required 
              />

          </div>

          <div className='flex flex-col mt-8 gap-3 '>
            <button className='font-semibold  bg-blue-500 text-white px-14 py-2 rounded-lg'>Register</button>

            <Link to={'/login'} className='text-sm text-gray-400 text-center'>Already have an account? <span className='text-blue-400'>Sign in</span></Link>
          </div>

      </div>
  
       <p className='text-gray-400 text-xs pb-5'>
              This site is protected by reCAPTCHA and the <Link to="https://policies.google.com/privacy?hl=en-US#infocollect" className='text-blue-400 underline'>Google Privacy Policy</Link> and Terms of Service apply
        </p>
    
    </form>
    </div>
  )
}

export default UserSignup