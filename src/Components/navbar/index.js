import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () =>{
    const ram = ""

    return(
        <div className='bg-primary'>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-end mt-3 navbar-hamburger" style={{backgroundColor:"blue"}}>  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flexnav" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
            <li className="nav-item active">
                <Link className="nav-link ml-2" to="/" style={{color:'white'}}>HOME <span class="sr-only">(current)</span></Link>  
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-2" to="/about" style={{color:'white'}}>ABOUT</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>ADMISSIONS</Link>
            </li><li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>CAMPUS LIFE</Link>
            </li><li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>FACILITIES</Link>
            </li><li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>DEPARTMENTS</Link>
            </li><li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>PLACEMENTS</Link>
            </li><li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>STAFF</Link>
            </li><li className="nav-item">
                <Link className="nav-link ml-2" to="#" style={{color:'white'}}>FEEDBACK</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-2" to="/contactus" style={{color:'white'}}>CONTACT</Link>
            </li>
            <li className="nav-item dropdown">
                <a style={{color:'white'}} className="nav-link dropdown-toggle ml-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            </ul>
    </div>
    </nav>
    </div>
    )
}

export default Navbar
