import axios from "axios";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        console.log(res.data.message);
        // Swal.fire({
        //   icon: "success",
        //   text: res.data.message,
        // });
      }
    });
  };

  var AuthButton = "";
  if (!localStorage.getItem("auth_token")) {
    AuthButton = (
      <>
        <Link className="nav-link" to="/register">
          Register
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </>
    );
  }else{
    <Link className="nav-link" to="/">
    Home
  </Link>
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          React Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto">
        
          {AuthButton}

          <button
            type="button"
            className="nav-link btn-danger btn-sm text-white"
            onClick={logoutSubmit}
          >
            Logout
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
}
