import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/header/header.component';

//Pages
import Homepage from './pages/homepage/homepage.component';
import ServicesPage from './pages/services/services.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
