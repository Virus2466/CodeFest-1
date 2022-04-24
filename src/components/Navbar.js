import React , {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const [click , SetClick] = useState(false);

    const [button , SetButton] = useState(true);

    const handleClick = () => SetClick(!click);

    const closeMobileMenu = () => SetClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            SetButton(false)
        }else{
            SetButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    } , []);


    window.addEventListener('resize' , showButton)





return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                LIL CUBS   <i className="fa-solid fa-paw"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-items'>
                <Link  to="/Services" className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-items'>
                <Link  to="/Reviews" className='nav-links' onClick={closeMobileMenu}>
                    Reviews
                </Link>
            </li>
            <li className='nav-items'>
                <Link  to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                    Call Now
                </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>CALL NOW</Button>}
        </div>
    </nav>
    
    
    </>
)
}

export default Navbar;