import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/home.css'
import { cerrarSesion } from '../utils/FirebaseUtil'

function Home() {

    const history = useHistory()

    const autenticado = localStorage.getItem('token')

    async function handleSignOut(e){
      e.preventDefault()
      await cerrarSesion()
      localStorage.clear()
      history.push('/login')
    }

    if(autenticado){
  return (
    <div className='container'>
        <h1>Estas dentro del componente Home</h1>
        <button onClick={handleSignOut}>Log out</button>
    </div>
  )} else{
    history.push('/login')
    return <div></div>
  }
}

export default Home