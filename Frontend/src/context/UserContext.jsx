import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();


const UserContext = ({children}) => {
  const [user,setUser] = useState({
    email:"",
    fullname:{
        firstname:'',
        lastname:'',
    }
  })
  return (
    <UserDataContext.Provider>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext