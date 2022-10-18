import React from 'react'
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import {Nav,Navbar,NavbarBrand,Badge,Container,Dropdown,FormControl,Button} from 'react-bootstrap';
import './styles.css'
import { Link,useLocation } from 'react-router-dom';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const [user, setUser]=useState("Hello, Sign in!");
  return (
    <Navbar fixed="top" bg="dark" variant="dark" >
        <Container>
            <NavbarBrand> 
                <Link to='/'>Shopping Cart</Link>
            </NavbarBrand>
            {useLocation().pathname.split("/")[1] !== "cart" && (
            <Navbar.Text className="search1">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
            )}

          <Nav>
          <NavbarBrand> 
                <Link to='/signup'>{user}</Link>
            </NavbarBrand>
            <Dropdown >
                <Dropdown.Toggle variant="none">
                    <FaShoppingCart color="white" fontSize={"25"}/>
                    <Badge bg="none">{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu align={"end"} style={{ minWidth: 280 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Header