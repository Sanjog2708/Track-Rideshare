import React, {useContext, useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom"
import {UserDataContext} from "../context/UserContext"
import Cookies from "universal-cookie"

const UserProtectedWrapper = ({children}) => {

  const cookies = new Cookies();
  const {user} = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies.get("accessToken")) {
      navigate("/login");
    }
  },[cookies])
  

  return (
    <>
      {children}
    </>

  )
}

export default UserProtectedWrapper