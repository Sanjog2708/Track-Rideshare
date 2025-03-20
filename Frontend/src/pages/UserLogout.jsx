import React,{useEffect} from 'react'
// import axios from '../config/axios'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const UserLogout = () => {

    const cookies = new Cookies();
    const navigate = useNavigate();
    const token = cookies.get("accessToken");
    
    useEffect(() => { 
        axios.get(`${import.meta.env.VITE_API_URL}/users/logout`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            if(res.status == 201){
                console.log(res);
                navigate("/");
                cookies.remove("accessToken",{path:"/"});
            }
           
        })
    }, [])
    
  



  return (
    <div>
        Hello
    </div>
  )
}

export default UserLogout