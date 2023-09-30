


const Home = () =>{
    const ram = ""
    console.log(ram)
    return(
        <div style={{width:'35%',height:'10%',marginRight:"20vh"}} className="m-3 ml-5">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
        </div>
    )
}

export default Home