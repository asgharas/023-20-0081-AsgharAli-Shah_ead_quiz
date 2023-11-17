import barfi1 from '../assets/img/barfi-1.png';
import barfi2 from '../assets/img/barfi-2.png';
import barfi3 from '../assets/img/barfi-3.png';
import barfi4 from '../assets/img/barfi-4.png';
import barfi5 from '../assets/img/barfi-5.png';
import barfi6 from '../assets/img/barfi-6.png';

let barfis = [ barfi1, barfi2, barfi3, barfi4, barfi5, barfi6 ];

const Offerings = () => {
    return (
        <>
            <div id="menu" className="text-white p-4">
                <div className="main-container d-flex flex-column align-items-center justify-content-evenly p-4">
                    <h1 className="align-self-start">Our Offergins</h1>
                    <div className="barfi-menu row d-flex justify-content-evenly ps-4 pe-4 ms-5">
                    {
                        barfis.map((barfi, i) => {
                            return (
                                <div className="single-barfi d-flex flex-column justify-content-start align-items-start  col-10 col-md-3 col-lg-3 col-xl-4 p-1">
                                    <img src={barfi} alt="" />
                                    <h3>Barfi</h3>
                                    <h3>Rs. 900/=</h3>
                                    <button className='btn btn-light ms-4'><strong>Order Now</strong></button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offerings;