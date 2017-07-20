import React, { Component } from 'react';
// import List from './components/list';
// import Button from './components/button';
import ThemeList from './components/theme_list';
import DailyQuoteDetail from './components/daily_quote_detail';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      dailyQuote: null,
      theme: 'Motivational'
    };

    this.dailyQuoteCall();
    this.userThemeCall();

  }

  handleClick = () => {
    console.log('the button was clicked');
  };
  // componentDidMount() {
  componentWillMount() {
    var self = this;
    axios.get('http://localhost:3000/quotes/motivational')
    // localhost:3000/dailyquotes/creativity
    .then(function (response) {
      self.setState({
        quotes: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  dailyQuoteCall() {
    var self = this;
    axios.get('http://localhost:3000/dailyquotes/motivational')
    .then(function (response) {
      self.setState({
        dailyQuote: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  userThemeCall() {
    var self = this;
    axios.get('http://localhost:3000/users/1')
    .then(function (response) {
      self.setState({
        theme: response.data.theme_choice
      });

      console.log("new theme");
      // console.log( {self.theme} );
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  userDailyQuoteCall() {
    var self = this;
    //set var for the addendum to url that calls for the theme associated with user
    axios.get('http://localhost:3000/dailyquotes/motivational')
    .then(function (response) {
      self.setState({
        dailyQuote: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Wise Minding</h2>
        </div>

        <div>Username: </div>
        <button>
          Logout
        </button>
        <div>Theme:</div>
        <div>{ this.state.theme }</div>
        <div>
          <button onClick={ this.handleClick }>Change Theme</button>
          <ThemeList />
        </div>
        <div>Delivery Time:</div>
        <div>
          <button onClick={ this.handleClick }>Change Delivery Time</button>
        </div>

        <div className="daily-quote">
          <h1>Quote of the Day</h1>
          <DailyQuoteDetail dailyQuote={this.state.dailyQuote} />
          <h2>Theme: {this.state.theme}</h2>
        </div>
      </div>
    );
  }
}

export default App;
