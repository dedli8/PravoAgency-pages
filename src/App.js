import React, { Component } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import Reviews from './components/reviews/Reviews';
import Feedbackform from './components/feedbackform/Feedbackform';
import Footer from './components/footer/Footer';
import './App.scss';
import {Provider} from './context'


class App extends Component {
  render() {
    return (
        <Provider>
      <div className="App">
          <div className="header-banner-wrap">
          <Header/>
          <Banner/>
          </div>
          <Services/>
          <Reviews/>
          <Feedbackform/>
          <Footer/>
      </div>
        </Provider>
    );
  }
}
export default App;
