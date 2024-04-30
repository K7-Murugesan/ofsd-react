import React from "react";

class NewClassComp extends React.Component {

    state = {
        count : 0,
        toggle : false,
        obj: {
            id:0
        }
    }

    increase(){
        this.setState(
            {
                ...this.state,
                count : this.state.count+1
            }
        )
    }
    decrese(){
        this.setState(
            {
                ...this.state,
                count : this.state.count-1
            }
        )
    }

    //Stateful Component -it have own state - life cycle methods
    render( ){

        console.log( this.state.toggle );
        return(
            <div>
                <h1> Im from Parent </h1>
                <h1> { this.state.count } </h1>
                <button onClick={()=>this.increase()}>+</button>
                <button onClick={()=>this.decrese()}>-</button>
            </div>
        )
    }
}

export default NewClassComp;