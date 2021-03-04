import React, {useState, useEffect} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import MY_SERVICE from '../../services'

export default function Navbar() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
  MY_SERVICE.currentUser()
 .then(({data})=> {
   if(data.user){
    setUser({...data.user})
   }
   else(
     setUser(null)
   )
  })
 .catch(err => console.log(err) ) 
 },[])

  return(
    <nav>
        
        {user === null ?(
          <ul>
          <li>login</li>
          <li>signup</li>
          </ul>
          
        ):(
          <ul>
          <li>Profile</li>
          <li>Private</li>
          <li>Logout</li>
          </ul>
        )
      
      
      }
          
        
      
    </nav>
  )
}
