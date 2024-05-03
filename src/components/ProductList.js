import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductList = () => {

    let [users, setUsers ] = useState( [
        { id:1, userName : "Muthu", role:"Front End Developr", img: "./images/img3.jpeg" },
        { id:2, userName : "Hari", role:"Front End Developr", img: "../../public.logo192.png" },
        { id:3, userName : "Ramesh", role:"Front End Developr", img: "./images/img3.jpeg" },
        { id:4, userName : "James", role:"Front End Developr", img: "./images/img4.jpeg" },
        { id:5, userName : "KaliRajan", role:"Front End Developr", img: "./images/img4.jpeg" },
    ] )

  return (
    <div className='container text-center' >
        <h1> Product Details </h1>
        <section className='d-flex'>
        {
           users.map( user=>(
              
                <Card style={{ width: '18rem' }} className='mx-2' key={user.id}>
                    <Card.Img variant="top" src={user.img} />
                    <Card.Body>
                        <Card.Title> {user.role}  </Card.Title>
                        <Card.Text> {user.userName} </Card.Text>
                        <Button variant="primary"> View Detail </Button>
                    </Card.Body>
                </Card>
           ) ) 
        }
        </section>
    </div>
  )
}
