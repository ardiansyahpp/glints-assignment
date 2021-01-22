import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const navStyle = {textDecoration: 'none', color: 'black'}
    const logoStyle = {textDecoration: 'none', color: 'white'}

    return (
        <nav>
            <Link to='/' style={logoStyle}>
            <h1 className="logo">ARC'd</h1>
            </Link>
            <ul>
                <Link to='/' style={navStyle}>
                <li className='nav-links'>Home</li>
                </Link>
                <Link to='/projects' style={navStyle}>
                <li className='nav-links'>Projects</li>
                </Link>
                <Link to='about-me' style={navStyle}>
                <li className='nav-links'>About Me</li>
                </Link>
                <Link to='contact' style={navStyle}>
                <li className='nav-links'>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;