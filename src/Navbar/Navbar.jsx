import React from "react";
import {Link}  from "react-router-dom"
import "./navbar.css"

let Navbar = () =>{
    return<div className="navbar-div">
    <Link to="/"><div>Home</div></Link>
    <Link to="/login"><div>Login</div></Link>
    <Link to="/booking"><div>Booking</div></Link>
    
    </div>
}

export default Navbar;