import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/login.css'
import { firebaseRegistrarUsuario } from '../utils/FirebaseUtil';

function Register() {

    const history = useHistory();

    const [input, setInput] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
    })

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    async function handleRegister(e){
        e.preventDefault()
        const registrar = await firebaseRegistrarUsuario(input.email, input.password)
        console.log(registrar)
        history.push('/login')
    }

  return (
    <div className='containerLogin'>
        <h2>Register</h2>
        <h4>Register on the platform</h4>
        <form onSubmit={handleRegister} className='containerForm'>
            <input 
                name='name'
                value={input.name}
                type='text'
                placeholder='Name'
                onChange={(e) => handleOnChange(e)}
            />

            <input 
                name='lastname'
                value={input.lastname}
                type='text'
                placeholder='Last Name'
                onChange={(e) => handleOnChange(e)}
            />

            <input 
                name='email'
                value={input.email}
                type='email'
                placeholder='Email'
                onChange={(e) => handleOnChange(e)}
            />

            <input 
                name='password'
                value={input.password}
                type='password'
                placeholder='Password'
                onChange={(e) => handleOnChange(e)}
            />
            <button type='submit'>
                Register
            </button>
        </form>
    </div>
  )
}

export default Register