import React, { useState } from 'react'

export const Section = () => {

  let[ toggle, setToggle ] = useState( true )

  let toggleFunction = () =>{
    setToggle( !toggle )
  }

  return (
    <main className='body-content'>
        {
          toggle ? <SideBar/> : <SectionBody/>
        }
        
        <p> We are gonna make CRUD Operation </p>
        { toggle && <h5> Im gonna play hide and seek </h5> }
        <button onClick={toggleFunction}> Toggle </button>
    </main>
  )
}


function SideBar(){
   return (
      <aside>
          <section>
              <span> &#128507; </span>
              <span> &#128512;</span>
              <span> &#128514; </span>
              <span>&#128515; </span>
          </section>
      </aside>
   )
}
function SectionBody(){
   return (
      <aside>
          <section>
              <span> &#128640; </span>
              <span> &#128641;</span>
              <span> &#128642; </span>
              <span>&#128643; </span>
          </section>
      </aside>
   )
}