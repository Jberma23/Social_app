// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      logged_in: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/current_user")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            current_user: result,
            logged_in: true

          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const isLoggedIn = this.state.logged_in;
    return (<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      {/* {isLoggedIn ? Signed in as: <a href="#login">{this.state.current_user?.first_name + ' ' + this.state.current_user?.last_name}</a> : <a href="#login">login</a> } */}
      </Navbar.Text>
    </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}
export default NavigationBar