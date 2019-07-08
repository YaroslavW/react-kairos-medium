import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import CallToAction from "./Components/CallToAction";
import About from './Components/About/About';
import Intro from './Components/Intro';
import Portfolio from "./Components/Portfolio";
import Journal from "./Components/Journal";
import Services from "./Components/Services";
import Footer from './Components/Footer';
import Map from './Components/Map';
import Contact from './Components/Contact';

class App extends Component {
  state = {
    siteData: {}
  };
  getSiteData() {
    const domenName = document.domain
    $.ajax({
      url: `http://${domenName}:3000/siteData.json`,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ siteData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getSiteData();
  }

  render() {
  return (
    <div>
      <Header data={this.state.siteData.header}/>
      <Intro data={this.state.siteData.intro} />
      <Services data={this.state.siteData.services}/>
      <Portfolio />
      <Journal data={this.state.siteData.journal} />
      <About data={this.state.siteData.about} />
      <CallToAction />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
  }
}

export default App;
