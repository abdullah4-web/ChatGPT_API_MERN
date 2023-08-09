// NavBar.js
import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './NavBar.css';
import { AuthContext } from '../pages/AuthContext'; // Import the AuthContext

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { state, logout } = useContext(AuthContext);

  console.log('Current state:', state);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
  };

  return (
    
     <div className="bg-primary">
      
        <Navbar expand="lg"   variant="dark" className="p-0">
          <Navbar.Brand as={Link} to="/">
            <h1 className="text-light">
              AI<span className="text-light">.</span>Tech
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" className="ms-auto me-0" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    Pages <FaAngleDown /> 
                  </>
                }
                show={isDropdownOpen}
                onToggle={handleDropdownToggle}
              >
                <NavDropdown.Item as={Link} to="/chatbot">
                  Chat Bot
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/summary">
                  Summarize Text
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/paragraph">
                  Generate Paragraph
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jsconverter">
                  HTML To JSX
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/image">
                  Image Generator
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {/* Conditionally render the user's name or login/logout link */}
              {state.user ? (
                <>
                  <Nav.Link as={Link} to="/">
                    Hello, {state.user.name} {/* Display the user's name */}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login"onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    
  );
};

export default NavBar;
