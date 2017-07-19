import React, { Component } from 'react';
import List from './components/list';
import DailyQuoteDetail from './components/daily_quote_detail';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      dailyQuote: null
    };

    this.dailyQuoteCall();
  }

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Wise Mind</h2>
        </div>

        <div>
          <h1>Quote of the Day</h1>
          <DailyQuoteDetail dailyQuote={this.state.dailyQuote} />
          <h2>Theme: Motivational</h2>
        </div>
      </div>
    );
  }
}

export default App;

          // <List quotes={this.state.quotes} />
