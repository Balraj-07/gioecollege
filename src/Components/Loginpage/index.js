import './index.css';

const Loginpage = () =>{
    const ram = " "
    console.log(ram)
    return(
        <div className="headCard m-5">
            <div>
                <img src="https://play-lh.googleusercontent.com/cP3rXN_KOucFNP8QrftBS2uoiT-hHH1BqRoLUwltJMC3MPQKwXFzIML-21Kwenxb3eY" alt="logo" className="image" />
            </div>
            <div>
                <h1 className="text">Government Institute Of Electronics</h1>
                <h5 className="text_low"> Government college in Secunderabad, Telangana</h5>
            </div>
            <div>
                <h5 className="mb-5 text">Student/Parent Login</h5>
                <div className="headCard">
                    <input placeholder="LoginID" className="form-control mr-2 "/>
                    <input placeholder="********" className="form-control "/>
                    <button className="btn-primary ml-2 button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Loginpage