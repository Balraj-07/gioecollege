import './index.css';

const Header = () =>{
    const ram = " "
    console.log(ram)
    return(
        <div className="headCard">
            <div className='clg-logo-container'>
            <div>
                <img src="https://play-lh.googleusercontent.com/cP3rXN_KOucFNP8QrftBS2uoiT-hHH1BqRoLUwltJMC3MPQKwXFzIML-21Kwenxb3eY" alt="logo" className="image" />
            </div>
            <div>
                <h1 className="text-center clg-name-heading">Government Institute Of Electronics</h1>
                <h5 className="text-center clg-address-heading"> Government college in Secunderabad, Telangana</h5>
            </div>
            </div>
            <div className='login-main-container'>
                <h5 className="mb-3 text">Student/Parent Login</h5>
                <div className="login-form">
                    <input placeholder="LoginID" className="form-control"/>
                    <input placeholder="********" className="form-control login-margin-1"/>
                    <button className="btn-primary ml-2 button login-margin-1 text-center">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header
