/** @format */

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import trad from "./Images/TradExpress.svg";
import "./Nav.css";
const Navigate = () => {
  return (
    <div>
      <div className='Navg'>
        <Navbar collapseOnSelect expand='lg' bg='' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>
              <Link to='/'>
                <img src={trad} alt='' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>

              <Nav>
                <div className='Navtext'>
                  <Nav.Link>
                    <Link to='./Buy'>Instant Buy/Sell</Link>
                  </Nav.Link>
                </div>
                <div className='Navtext'>
                  <Nav.Link className='text' eventKey={2} href='#memes'>
                    learn
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link>
                    <Link to='./Login'>
                      <button className='Btn'>Login</button>
                    </Link>
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link>
                    <Link to='./Welcome'>
                      <button className='Btn2'>Get Started</button>
                    </Link>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigate;
