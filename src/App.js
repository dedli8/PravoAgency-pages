import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/header/Header';
import MainPage from './components/pages/MainPage';
import Services from './components/services/Services';
import FeedbackForm from './components/feedbackform/FeedbackForm';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/footer/Footer';
import './App.scss';
import {Provider} from './context'


class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
      <div className="App">
          <Header/>
              <Switch>
              <Route exact path="/" component={MainPage}></Route>
                  <Route exact path="/services" component={Services}></Route>
              <Route exact path="/feedbackform" component={FeedbackForm}></Route>
              <Route exact path="/reviews" component={Reviews}></Route>
              <Route component={NotFound}></Route>
              </Switch>
          <Footer/>
      </div>
            </Router>
        </Provider>
    );
  }
}
export default App;
