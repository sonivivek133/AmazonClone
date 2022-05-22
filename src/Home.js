import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
     <img className='home__image'
     src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
     alt='homeImage'/>

     <div className='home__row'>
     <Product
      id="123"
      title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover "
      price={450}
      rating={5}
      image ="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
     />

     <Product
       id={12312}
       title="Apple Mobile iPhone 13 128 GB : Our most advanced dual‑camera system ever and A lightning-fast chip that speeds up everything you do."
       price={74986.00}
       rating={5}
       image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
     />
     </div>

     <div className='home__row'>
     <Product
       id={12312}
       title="2021 Apple 11-inch iPad Pro (Wi-Fi, 128GB) : 12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR"
       price={79000.00}
       rating={5}
      image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg"
     />

     <Product
      id={12312}
      title="Apple Watch Series Same Paragraph Smart Watch 1.3' Full Touch Screen Ip67 Waterproof Sport Smart Watch "
      price={25000.00}
      rating={5}
      image="https://img.joomcdn.net/53c2eda7d95c0bf2facf2db476729cfbdf056e56_original.jpeg"
     />

     <Product
       id={12312}
       title="Amazon Echo Dot (4th Gen) : Make your home smart Use voice to control lamps, kettle and other appliances, or control TV remotely"
       price={5898.00}
       rating={5}
       image="https://i.gadgets360cdn.com/products/large/amazon-echo-dot-4th-gen-850x800-1601012320.jpg"
     />

     </div>
     
     <div className='home__row'>
     <Product
        id={12312}
        title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model  : Samsung's Largest 1000R Gaming Monitor: Get your head in the game with the 49 inch Odyssey G9"
        price={710.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SY355_.jpg"
     />
     </div>

    </div>
  )
}

export default Home