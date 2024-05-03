import React, { useState } from 'react'
import { Comp11 } from './Comp11'

export const Comp1 = () => {

  let [data] = useState( "Afternoon" )

  let [recievedData, setRecievedData] = useState("")

  let recieveDataFromChild = (dataFromChild) => {
    setRecievedData( dataFromChild )
  }

  return (
    <div>
        <h1> {recievedData} </h1>
        <Comp11  data = {data} collectingData = {recieveDataFromChild}  />.
    </div>
  )
}
