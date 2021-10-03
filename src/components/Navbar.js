import React,{useState} from 'react'
import './Navbar.scss'
function Navbar() {
    const [MenuIsOpen, setMenuIsOpen] = useState(false)
    return (

    <div className="navbar">
        <div className="logo-wrapper"><p>CRYPTO</p><p>ICO</p></div>
        <div className="bar-wrapper">
            <div className={MenuIsOpen ? "nav-list-wrapper active": "nav-list-wrapper"}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Price</a></li>
                    <li><a href="/">profile</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
            <div className="action-wrapper">
                <a href="/">Login</a>
                <a className="button" href="/">Get Started</a>
            </div>
            
        </div>
        <div className="menu_icon">
        <i className = {MenuIsOpen ? "fas fa-times" : "fas fa-bars"} onClick={()=>{setMenuIsOpen(!MenuIsOpen)}} />
        </div>
    </div>

    )
}

export default Navbar
