import React from 'react';
import MY_SERVICE from '../../services'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';


function Home() {
  const [form, handleInput] = useForm()
  const history = useHistory()
  const handleSubmit = async e =>{

    e.preventDefault()
    MY_SERVICE.signup(form)
    .then(({data})=> history.push('/login'))
    .catch(err => console.log(err))
  }

  return (
    <div>
    <Navbar/>
      <h1>Home</h1>
      <form method="post">
        <input onChange={handleInput} type="email" name="email"/>
        <input onChange={handleInput} type="text" name="name"/>
        <input onChange={handleInput} type="password" name="password"/>
        <button onClick={handleSubmit}>Registrar</button>
      </form>
      
    </div>
  );
}

export default Home;
