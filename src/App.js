import React, { useState } from "react";
import {Header} from './components/Header'
import './App.css'
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Comp1 } from "./components/propDrilling/Comp1";
// import ChildFunComponent from "./components/ChildFunComponent";
// import NewClassComp from "./components/NewClassComp";

// export let arr = [1,2,3]

function App() {

  let [userName, setUserName] = useState( "Kesavan" )

  return (
    <React.Fragment> { /*Fragment -  Element Node will not create */ }
        {/* <ChildFunComponent/>   
        <NewClassComp/> */}
        <Header/>
        <Section/>
        <Footer title = { userName } course={{id:1}} > 
            <p> Im a Children prop </p>
            <p> Im a Children prop </p>
            <p> Im a Children prop </p>
            <p> Im a Children prop </p>
        </Footer>
        <Comp1/>
    </React.Fragment>
  );
}

export default App;

// export { a }