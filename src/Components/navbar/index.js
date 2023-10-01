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
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>HOME <span class="sr-only">(current)</span></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>ABOUT</a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>ADMISSIONS</a>
            </li><li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>CAMPUS LIFE</a>
            </li><li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>FACILITIES</a>
            </li><li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>DEPARTMENTS</a>
            </li><li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>PLACEMENTS</a>
            </li><li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>STAFF</a>
            </li><li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>FEEDBACK</a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-2" href="#" style={{color:'white'}}>CONTACT</a>
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
            <li className="nav-item">
                <a className="nav-link disabled ml-2" href="#" style={{color:'white'}}>Disabled</a>
            </li>
            </ul>
    </div>
    </nav>
    </div>
    )
}

export default Navbar
