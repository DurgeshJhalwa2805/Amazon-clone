import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon prime"/>    
        <div className="home__row">
        <Product id={123456}
            title="The Lean startup: How Constant Innovation Creates Radically Sucessfull Buissness Paperback"
            price={29.99}    
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg"
            rating={5}
        />
        <Product id={234567}
        title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk 5 Liters"
        price={249.99}
        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        rating={4} />
        </div>
        <div className="home__row">
        <Product id={345678}
             title="Samsung LC49XEC04GYN Gaming LED Monitor"
            price={199.99}    
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}/>
        <Product id={456789}
             title="Amazon Echo 3rd Generation | Smart speaker with Alexa"
            price={98.99}    
            image="https://images-na.ssl-images-amazon.com/images/I/41Pi3kbuIRL.jpg"
            rating={5}/>
        <Product id={567890}
            title="New Apple Ipad pro(12.9 inch,WIFI,128 GB)-Silver"
            price={598.99}    
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385.jpg"
            rating={5}/>
        </div>
        <div className="home__row">
        <Product id ={111111} 
            title="Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
            price={1009.94}    
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX365.jpg"
            rating={5}/>
        </div>
        </div>
        </div>
    )
}

export default Home
