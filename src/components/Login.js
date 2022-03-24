import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { firebaseLogin, iniciarSesionFacebook, iniciarSesionGoogle } from '../utils/FirebaseUtil'

function Login() {

    const history = useHistory()

    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({})

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    async function handleLogin(e){
        e.preventDefault()
        const login = await firebaseLogin(input.email, input.password)
        if(login.accessToken){
            localStorage.setItem('token', login.accessToken)
            history.push('/home')
        } else{
            setError({mensaje: login})
        }
    }

    async function handleLoginGoogle(){
        const iniciarSesion = await iniciarSesionGoogle()
        if(iniciarSesion.accessToken){
            localStorage.setItem('token', iniciarSesion.accessToken)
            history.push('/home')
        } else{
            setError({mensaje: iniciarSesion})
        }
    }

    async function handleLoginFacebook(){
        const iniciarSesion = await iniciarSesionFacebook()
        if(iniciarSesion.accessToken){
            localStorage.setItem('token', iniciarSesion.accessToken)
            history.push('/home')
        } else{
            setError({mensaje: iniciarSesion})
        }
    }

  return (
    <div className='containerLogin'>
        <h2>Sign In</h2>
        <h4>Sign In on the platform</h4>
        <form onSubmit={handleLogin} className='containerForm'>
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
                Login
            </button>
            <button onClick={handleLoginGoogle} type='button'>
                Login with Google
            </button>
            <button onClick={handleLoginFacebook} type='button'>
                Login with Facebook
            </button>
        </form>
        {error.hasOwnProperty('mensaje') && <p style={{color: 'red'}}>{error.mensaje}</p>}
        <p>Don't have an account? <Link className='link' to={'/register'}>Sign Up with email</Link></p>
    </div>
  )
}

export default Login