import React, { useContext } from 'react'
import { Context} from '../Context-API/ContextAPI'
import styled from 'styled-components'
export const Comp1111 = ({newData}) => {


  let valueFromCont = useContext( Context )

  let divStyles = {
    color : "white",
    backgroundColor : "red",
    width : "50%",
    height : "50%"
  }

  let NewButton = styled.button`
  color: white;
  background-color: black
   `;

  return (
    
    <div style={ divStyles }>
        <h1> {newData} </h1>
        <Context.Consumer>
           {
             (value)=> <h1> {value} </h1>
           }
        </Context.Consumer>
        <h5> {valueFromCont} </h5>
        <NewButton> New Button </NewButton>
    </div>
  )
}
