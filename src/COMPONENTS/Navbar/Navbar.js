import React,{ useState,useEffect } from 'react';
import './navbar.scss';

function Navbar(props) {

    const [windowWidth,setWindoWidth] = useState(0)

    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        setWindoWidth(width)
    });

    useEffect(() =>{
        let width = window.innerWidth;
        setWindoWidth(width)
    },[])

    return (
        <div id='fixed-top'>
            <div className='navbar-box '>
                <p>{windowWidth}</p>
                <nav className="navbar">
                    {props.children}
                </nav>
            </div>
        </div>
    );
}
export default Navbar;


