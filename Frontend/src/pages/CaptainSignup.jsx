import React,{useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext';
import axios from "../config/axios"

const CaptainSignup = () => {


  const {captain,setCaptain} = useContext(CaptainDataContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const captainData = {
    
      firstname:firstName,
      lastname:lastName,  
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }

    };

    axios.post("/captains/register",captainData)
    .then((res)=>{
      setCaptain(captainData);
      navigate("/home")

    })
    .catch((err)=>{
      console.log(err);
    })

    setEmail('');
    setFirstName('');
    setPassword('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }

  return (
     <div className='p-7 bg-zinc-900 text-white h-screen flex flex-col gap-12'>
        <h1 className='text-3xl font-bold text-center'>Register</h1>
        <form className='flex flex-col justify-between h-full' onSubmit={(e)=>handleSubmit(e)}>
          <div>
              <div>
                  <h3 className='text-md  mb-2'>What's your Name</h3>
                  <div className='flex gap-3'>
                    <input 
                    type="text" 
                    className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-[48%] py-[0.3rem] outline-none  mb-6 ' 
                    placeholder='First Name'
                    value={firstName} 
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    required
                    />
                    <input 
                    type="text" 
                    className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-[48%] py-[0.3rem] outline-none mb-6 ' 
                    placeholder='Last Name' 
                    value={lastName} 
                    onChange={(e)=>{setLastName(e.target.value)}}
                    required
                    />
                  </div>
                 
                  <h3 className='text-md mb-2'>What's your email</h3>
                  <input 
                  type="email" 
                  className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.3rem] outline-none  mb-6 ' 
                  placeholder='johndoe@gmail.com' 
                  value={email} 
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                  />
                  <h3 className='text-md mb-2'>Enter Password</h3>
                  <input 
                  type="password" 
                  className='bg-zinc-700 border border-gray-500 rounded-md px-3 w-full py-[0.3rem] outline-none' 
                  placeholder='Enter your password' 
                  value={password} 
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required 
                  />

                  <h3 className='text-md mb-5 mt-4'>Vehicle Information</h3>
                  <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-2 gap-x-4'>
                      <input
                        type="text"
                        className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.3rem] outline-none mb-4'
                        placeholder='Vehicle Color'
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.3rem] outline-none mb-4'
                        placeholder='Plate Number'
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        required
                      />
                       <input
                        type="number"
                        className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.3rem] outline-none mb-4'
                        placeholder='Vehicle Capacity'
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        required
                      />
                      <select
                        className='bg-zinc-700 border border-gray-600 rounded-md px-3 w-full py-[0.3rem] outline-none mb-4'
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        required
                      >
                        <option value="" disabled>Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="moto">Moto</option>
                      </select>
                    </div>
              
                  </div>
    
              </div>
    
              <div className='flex flex-col mt-8 gap-3 '>
                <button className='font-semibold  bg-blue-500 text-white px-14 py-2 rounded-lg'>Register</button>
    
                <Link to={'/captain-login'} className='text-sm text-gray-400 text-center'>Already have an account? <span className='text-blue-400'>Sign in</span></Link>
              </div>
    
          </div>
      

        
        </form>
     </div>
  )
}

export default CaptainSignup