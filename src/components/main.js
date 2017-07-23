import React, { Component } from 'react';
import Header from './header.js';
// import { getQueryParams } from './utils';
import Button from 'react-toolbox/lib/button/Button';
// import List from './components/list';
// import Button from './components/button';
import ThemeForm from './theme_form';
import PhoneNumForm from './phone_num_form';
// import ThemeList from './theme_list';
import DailyQuoteDetail from './daily_quote_detail';
import axios from 'axios';
import logo from '../logo.svg';
// import * as utils from './utils';
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
      login: '',
      userId: '',
    };


    // this.dailyQuoteCall();
    this.userInfoCall();
    // this.dailyQuoteCall();
    this.userDailyQuoteCall();
    console.log("inside constructor");
    console.log("this.state.userId");
    console.log(this.state.userId);
    console.log(this.state.login);
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
    console.log("inside userInfoCall");
    console.log("user: login");
    console.log(this.props.login);
    axios.get(`http://localhost:3000/users/${this.props.login}`, {
      params: {
        token: this.props.token
      }
    })
    .then(function (response) {
      console.log("response in userInfoCall:")
      console.log(response)
      self.setState({
        theme: response.data.theme_choice,
        username: response.data.username,
        userId: response.data.id,
        login: response.data.login,
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
    axios.get(`http://localhost:3000/users/${this.props.login}`, {
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
      console.log("user: login from self.state.login");
      console.log(self.state.login);
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
        <Header />

        <div>Username: { this.state.username } </div>
          <Button raised primary>
           Hi!
         </Button>

        <div>Theme:</div>
        <div>{ this.state.theme }</div>
        <ThemeForm />

        <PhoneNumForm />
        <div>
          <Button raised primary onClick={ this.handleClick }>Send Quote To A Friend</Button>
        </div>
          <DailyQuoteDetail dailyQuote={this.state.dailyQuote} />
          <h2>Theme: {this.state.theme}</h2>
      </div>

    );
  }
}

export default Main;
