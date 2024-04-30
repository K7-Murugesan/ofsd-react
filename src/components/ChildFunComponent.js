import { useState } from "react";

function ChildFunComponent( props ){


     let [count, updateCount] =  useState( 0 )
     let [obj, setObj] = useState( {id:1} )
    // let newVal = "React"
    // let newVal = 1
    // let newVal = [1,2,3,4]
    //------Using Closure i can update the state but will not render in UI
    // let newVal = {id:1}

    // function changeMyState(){
    //     newVal.id = 2;

    //     console.log( newVal );
    // }
    //---------------------------------

    function increase() {
        updateCount( (prevCount)=> prevCount+1  )
        updateCount((prevCount)=>  prevCount+1  )
        updateCount((prevCount)=>  prevCount+1  )
        // updateCount( count+1 )
        // updateCount( count+1 )
    }
    function decrease(){
        updateCount( (prevCount)=> prevCount-1 )
        updateCount( (prevCount)=> prevCount-1 )
    }


    // let jsx = <ul>
    //     <li>a</li>
    //     <li>b</li>
    //     <li>c</li>
    //     <li> { newVal.id } </li>
    // </ul>

    //Stateless Component - it dont have own state
    //Hooks
    return (
        <div>
            <h1> Hello World </h1>
            <h1> {count} </h1>
            <button onClick={()=>increase()}> + </button>
            <button onClick={()=>decrease()}> - </button>
            {/* <li> {JSON.stringify(newVal)} </li>
            { jsx } */}
        </div>
    )
}

export default ChildFunComponent;