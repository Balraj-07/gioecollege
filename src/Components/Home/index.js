


const Home = () =>{
    const ram = ""
    console.log(ram)
    return(
        <div style={{marginRight:"20vh",display:"flex",justifyContent:'space-between'}} className="m-3 ml-5 ">
                <div id="carouselExampleIndicators" class="carousel slide shadow-lg mb-5 bg-white rounded" style={{height:"%",width:'35%'}} data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/11492/2021/1/5/Campus%20Entrance%20View%20of%20Government%20Institute%20of%20Electronics%20Secunderabad_Campus-View.png" class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/11492/2021/1/5/College%20View%20of%20Government%20Institute%20of%20Electronics%20Secunderabad_Campus-View.png" class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/11492/2021/9/3/Laboratory%20of%20Government%20Institute%20of%20Electronics%20Secunderabad_Laboratory.jpg" class="d-block w-100" alt="..."/>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div style={{width:'28%'}}>
                    <h4 style={{color:'red',marginTop:'0vh',fontWeight:'initial'}}><em>Our Vision</em></h4>
                    <h5 style={{color:"#6600CC"}}>Striving for a symbiosis of technological excellence and human values.</h5>
                    <p></p>
                    <h4 style={{color:'green',fontWeight:'initial'}}><em>Our Mission</em></h4>
                    <h5 style={{color:'#6600CC'}}>To arm young brains with competitive technology and nurture holistic development of the individuals for a better tomorrow.</h5>
                </div>
                <div style={{width:'35%',textAlign:'center',backgroundColor:'blue',height:'50vh',backgroundSize:'cover',color:'white'}}>
                    <h5 className="mt-3">News and Announcements</h5>
                </div>
        </div>
    )
}

export default Home