import React, { Component } from 'react';
// import { getQueryParams } from './utils';
import Button from 'react-toolbox/lib/button/Button';
// import List from './components/list';
// import Button from './components/button';
import ThemeForm from './theme_form';
import ThemeList from './theme_list';
import DailyQuoteDetail from './daily_quote_detail';
import axios from 'axios';
import logo from '../logo.svg';
import * as utils from './utils';
import '../App.css';

class Main extends Component {
  constructor(props) {
    super(props);


    this.state = {
      quotes: [],
      dailyQuote: null,
      theme: 'motivational',
      username: '',
      time: '',
      id: '',
    };


    // this.dailyQuoteCall();
    this.userInfoCall();
    // this.dailyQuoteCall();
    this.userDailyQuoteCall();
    console.log("this.state.id");
    console.log(this.state.id);
  }

  handleClick = () => {
    console.log('the button was clicked');
  };
  // componentDidMount() {
  // componentWillMount() {
  //   var self = this;
  //   axios.get('http://localhost:3000/quotes/motivational')
  //   // localhost:3000/dailyquotes/creativity
  //   .then(function (response) {
  //     self.setState({
  //       quotes: response.data
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //
  // }


  dailyQuoteCall() {
    var self = this;
    axios.get(`http://localhost:3000/dailyquotes/${this.state.theme}`, {
      params: {
        token: this.props.token
      }
    })
    .then(function (response) {
      self.setState({
        dailyQuote: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  userInfoCall() {
    var self = this;
    axios.get('http://localhost:3000/users/1', {
      params: {
        token: this.props.token
      }
    })
    .then(function (response) {
      self.setState({
        theme: response.data.theme_choice,
        username: response.data.username,
      });
      // this.dailyQuoteCall();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  userDailyQuoteCall() {
    var self = this;
    // var theme = this.state.theme;
    axios.get('http://localhost:3000/users/1', {
      params: {
        token: this.props.token
      }
    })
    .then(function (response) {
      self.setState({
        theme: response.data.theme_choice
      });
      console.log("theme in middle of userDailyQuoteCall");
      console.log(self.state.theme);
      axios.get(`http://localhost:3000/dailyquotes/${self.state.theme}`, {
        params: {
          token: self.props.token
        }
      }).then(function (response) {
        self.setState({
          dailyQuote: response.data
        });
      })
    })
    //set var for the addendum to url that calls for the theme associated with user
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

        <div>Username: { this.state.username } </div>
          <Button raised primary>
           Hi!
         </Button>

        <div>Theme:</div>
        <div>{ this.state.theme }</div>
        <ThemeForm />
        <div>
          <ThemeList />
        </div>
        <div>Delivery Time:</div>
        <div>
          <Button raised primary onClick={ this.handleClick }>Change Delivery Time</Button>
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

export default Main;
