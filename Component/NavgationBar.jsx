import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Description from './Description.jsx'
class NavgationBar extends Component{
  render(){
  return (
    <BrowserRouter>
   <div> 
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as = {Link} to={"/"}  variant="danger">Job Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">     
            <Nav.Link as = {Link} to={"/about"} className = 'text-light'>About</Nav.Link>
            <Nav.Link as = {Link} to={"/contact"} className = 'text-light'>Contact</Nav.Link>
            <Nav.Link as = {Link} to={"/"} className = 'text-light'>Jobs</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/:id" element={<Description />} />
       </Routes>
     </div>
  </div>
</BrowserRouter>
  );
}
}
export default NavgationBar;