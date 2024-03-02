/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { getProducts } from '../api/ProductCalls';

export default function NavBarAuth() {
  const handleGetProductsClick = () => {
    getProducts()
      .then((data) => {
        console.log('Fetched Products:', data);
        // You can also set this data to a state or pass it to other components as needed
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Bangazon!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Other Nav Links */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/">
              <Nav.Link>Shop Products</Nav.Link>
            </Link>
            <Link passHref href="/">
              <Nav.Link>View Orders</Nav.Link>
            </Link>
            <Link passHref href="/">
              <Nav.Link>My Cart</Nav.Link>
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
            <Button variant="primary" onClick={handleGetProductsClick}>Get Products</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
