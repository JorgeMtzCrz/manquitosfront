import React, {useState, useEffect} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import MY_SERVICE from '../../services'
import Navbar from './Navbar';

export default function Private() {


const [user, setUser] = useState(null)

  const history = useHistory()

 useEffect(()=>{
  MY_SERVICE.currentUser()
 .then(({data})=> {
   if(data.user){
    setUser({...data.user})
   }else{
    history.push('/login')
   }
  })
 .catch(err => console.log(err) ) 
 },[])

 const logout = e =>{
   e.preventDefault()
   MY_SERVICE.logOut()
   .then(({data})=> history.push('/'))
   .catch(err => console.log(err))
 }



 if(!user) return <p>Loading</p>
  return (
    <>
    <Navbar/>
      <p>
      <p>Privado</p>
      <p>{user.name}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </p>
    
    </>
  );
}
