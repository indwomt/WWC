import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavbarBrand } from 'react-bootstrap'

function Navbar() {
    return (
        <>

        

        <Nav className="justify-content-between" activeKey="/home">
          <NavbarBrand>
          <h1>WWC</h1>
        </NavbarBrand>
        <div className='navLinks d-flex'>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">About</Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
      
        
        </>
    )
}

export default Navbar