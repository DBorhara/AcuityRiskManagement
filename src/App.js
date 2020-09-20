import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';

//Pages
import Homepage from './pages/homepage/homepage.component';
import ServicesPage from './pages/services/services.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import DisclaimerPage from './pages/disclaimer/disclaimer.component';
import MVRDataForm from './pages/MVR/MVR Data/MVRDataForm.component';
import MVRSubmission from './pages/MVR/MVR Submit Confirmation/MVRSubmitConfirm.jsx';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/disclaimer" component={DisclaimerPage} />
            <Route path="/MVRSubmission" component={MVRDataForm} />
            <Route path="/MVRSubmissionConfirm" component={MVRSubmission} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
