import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import { Button } from "./button";

function Nav(){

    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize',showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobilemenu}>
                        WOOSH
                    </Link>
                    
                    {/* Hamburger menu */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i>{click ? "x" : "="}</i>
                    </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobilemenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About-Us" className="nav-links" onClick={closeMobilemenu}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Rooms" className="nav-links" onClick={closeMobilemenu}>
                                    Rooms
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Book" className="nav-links-mobile" onClick={closeMobilemenu}>
                                    Book now
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle="btn-outline" buttonSize="btn-medium">Book now</Button>}
                    
                </div>
            </nav>
        </>
    )
}

export default Nav;