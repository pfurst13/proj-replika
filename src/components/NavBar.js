import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
            <NavLink to='/products'>
                Products
            </NavLink>
        </div>
    )
}

export default NavBar;