import React, {useEffect} from 'react';
import MY_SERVICE from '../../services'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {

  const [form, handleInput] = useForm()
  const history = useHistory()

  useEffect(()=>{
  MY_SERVICE.currentUser()
 .then(({data})=> {
   if(data.user){
    history.push('/private')
   }
  })
 .catch(err => console.log(err) ) 
 },[])

  const handleSubmit = async e =>{
    e.preventDefault()
    MY_SERVICE.login(form)
    .then(({data})=> history.push('/private'))
    .catch(err => console.log(err))
  }

  return (  
    <div>
    <Navbar/>
      <h1>Login</h1>
      <form >
        <input onChange={handleInput} type="email" name="email"/>
        <input onChange={handleInput} type="password" name="password"/>
        <button onClick={handleSubmit}>Registrar</button>
      </form>
      
    </div>
  );
}
