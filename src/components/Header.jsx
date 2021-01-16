import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className='navBg' variant='dark' expand='xl'>
      <Navbar.Brand className='navbarBrand'>
        <Link to='/'>
          <img className='logoImg' src='/img/logo.jpeg' alt='logo' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='navbar'>
          <Link className='navLinks' to='/GalleryPage'>
            גלריה
          </Link>
          <Link className='navLinks' to='/Explained'>
            זיווד רכבים
          </Link>
          <Link className='navLinks' to='/Explained2'>
            הובלה בקירור{" "}
          </Link>
          <Link className='navLinks' to='/ContactUs'>
            צור קשר
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
