import React, { useState } from 'react'
import { Comp11 } from './Comp11'

export const Comp1 = () => {

    let [data] = useState( "Afternoon" )

  return (
    <div>
        <Comp11  data = {data}  />
    </div>
  )
}
