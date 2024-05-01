import React, { useContext } from 'react'
import './Header.css'
import { Context } from './Context-API/ContextAPI'

export const Header = () => {

  let value = useContext( Context )

  return (
    <header className='header'>
        <h1> Todo List </h1>
        <h2> {value} </h2>
    </header>
  )
}
