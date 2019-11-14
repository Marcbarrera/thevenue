import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll'

import Header from'./components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueinfo/index'
import Highlight from './components/Highlights/index'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

function App() {
  return (
    <div className="App" style= {{height:"1500px",background:'white'}}>
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Element name="highlights">
        <Highlight/>  
      </Element>
      <Pricing/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
