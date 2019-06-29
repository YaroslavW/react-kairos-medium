import React from 'react';
import Header from './Components/Header';
import CallToAction from "./Components/CallToAction";
import About from './Components/About';
import Intro from './Components/Intro';
import Portfolio from "./Components/Portfolio";
import Journal from "./Components/Journal";
import Services from "./Components/Services";
import Footer from './Components/Footer';
import Map from './Components/Map';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <Portfolio />
      <Journal />
      <About />
      <CallToAction />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
