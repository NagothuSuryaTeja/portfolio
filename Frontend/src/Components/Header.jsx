import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
function Header()
{
    return(
        <>
        <div class ="header" >
            <h1>Uber</h1> 
            <Link to={'/login'} ><button> Login</button></Link> 
            <Link to={'/signup'} ><button>SignUp</button></Link>
        </div>

        </>
    )
}
export default Header;