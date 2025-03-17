import React, {useContext} from 'react'
import {useNavigate, Link} from "react-router-dom"
import {UserDataContext} from "../context/UserContext"


const UserProtectedWrapper = ({children}) => {

  const {user} = useContext(UserDataContext);
  const navigate = useNavigate();

  if(!user.email) {
    navigate("/login");
  }

  return (
    <>
      {children}
    </>

  )
}

export default UserProtectedWrapper