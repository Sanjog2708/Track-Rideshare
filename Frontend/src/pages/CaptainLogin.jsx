import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData,setUserData] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault();
    setUserData({email : email,
      password:password});
    setEmail('');
    setPassword('')
  }
  return (
    <div className='p-7 bg-zinc-900 text-white h-screen flex flex-col gap-12'>
      <h1 className='text-3xl font-bold text-center  '>Login</h1>
      <form className='flex flex-col justify-between h-full' onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <div>

              <h3 className='text-lg mb-2'>What's your email</h3>
              <input 
              type="email" 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.5rem] outline-none  mb-6' 
              placeholder='johndoe@gmail.com' 
              required
              />
              <h3 className='text-lg mb-2'>Enter Password</h3>
              <input 
              type="password" 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className='bg-zinc-700 border border-gray-500 rounded-md px-3 w-full py-[0.5rem] outline-none' 
              placeholder='Enter your password' 
              required 
              />

          </div>

          <div className='flex flex-col mt-8 gap-3'>
            <button className='font-semibold  bg-zinc-100 text-black px-14 py-2 rounded-lg'>Login</button>

            <Link to={'/captain-signup'} className='text-sm text-gray-400 text-center'>Join a fleet? <span className='text-blue-400'>Register as Captain</span></Link>
          </div>

        </div>
      
        <Link to={'/login'} className='font-semibold text-center bg-green-500 text-black px-14 py-2 rounded-lg'>Sign in as User</Link>
        
      </form>
    </div>
  )
}

export default CaptainLogin