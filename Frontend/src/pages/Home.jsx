import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] h-screen w-full pt-10 flex flex-col justify-between'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1600px-Uber_logo_2018.png" alt="" />
            <div className='bg-white p-4 pb-5'>
                <h2 className='text-3xl font-bold text-zinc-900'>Get Started with Uber</h2>
                <Link to='/login' className='inline-block text-center w-full bg-zinc-800 text-white py-3 rounded-xl mt-6'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home