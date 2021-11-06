import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">Altitude Health</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <i className="fas fa-shopping-cart" /> Cart
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fas fa-user" /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
