import welcomeImg from '../assets/img/welcom-img.png';

export default function Welcome() {
    return (
        <>
            <div id="welcome" className="d-flex flex-row justify-content-evenly align-items-center p-4 pt-5 pb-5 text-white">
                <div className="welcom-text col-12 col-md-4" >
                    <p className='fs-5'>Indulge in a symphony of flavors at our artisanal bakery. 
Welcome to a world where the aroma of freshly baked 
wonders captivates your senses. Our master bakers 
craft each creation with passion, using only the finest 
ingredients to ensure every bite is pure delight  
</p><p className='fs-5'>
From flaky croissants to decadent cakes, experience 
the epitome of taste and craftsmanship. Whether it's 
a special occasion or a craving for the extraordinary, 
our bakery offers a haven for your palate. Elevate 
your moments with the magic of our oven-fresh delights. 
Your journey to exceptional taste begins here.</p>
                </div>
                <div className="welcome-img">
                    <img src={welcomeImg} alt="" />
                </div>
            </div>
        </>
    )
}