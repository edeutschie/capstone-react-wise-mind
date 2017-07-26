import React, { Component } from 'react';
import Header from './header.js';
import ThemeForm from './theme_form';
import PhoneNumForm from './phone_num_form';
import DailyQuoteDetail from './daily_quote_detail';
import axios from 'axios';
import love from './loveResize.jpg';
import '../App.css';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      dailyQuote: null,
      theme: 'motivational',
      username: '',
      login: '',
      userId: '',
      phone_num: '',
    };

    // this.dailyQuoteCall();
    this.userInfoCall();
    // this.dailyQuoteCall();
    this.userDailyQuoteCall();

    this.handleSubmitTheme = this.handleSubmitTheme.bind(this);
    this.handleSubmitPhone = this.handleSubmitPhone.bind(this);

  }

  handleClick = () => {
    console.log('the button was clicked');
  };

  handleSubmitTheme(value) {
    var self = this;
    axios.patch(`http://localhost:3000/users/${this.state.login}`, {
        token: this.props.token,
        theme_choice: value
    })
    .then(function (response) {
      self.userDailyQuoteCall();
      self.dailyQuoteCall();
    })
    .catch(function (error) {
      console.log("in catch")
      console.log(error);
    });
  }

  handleSubmitPhone(value) {
    console.log("handleSubmitPhone value")
    console.log(value)
    axios.post(`http://localhost:3000/notifications/notify`, {
        token: this.props.token,
        phone_num: value,
        theme: this.state.theme
    })
    .then(function (response) {
      alert("Your text is on it's way.  You just made someone's day!");
      // alert('Your text is ' + response.data + '!')
    })
    .catch(function (error) {
      console.log("in catch")
      console.log(error);
      alert("Number must be a 10 digit phone number.")
    });
  }


  // dailyQuoteCall() {
  //   var self = this;
  //   axios.get(`http://localhost:3000/dailyquotes/${self.state.theme}`, {
  //     params: {
  //       token: this.props.token
  //     }
  //   })
  //   .then(function (response) {
  //     self.setState({
  //       dailyQuote: response.data
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  userInfoCall() {
    var self = this;
    axios.get(`http://localhost:3000/users/${self.props.login}`, {
      params: {
        token: this.props.token
      }
    })
    .then(function (response) {
      self.setState({
        theme: response.data.theme_choice,
        username: response.data.username,
        userId: response.data.id,
        login: response.data.login,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  userDailyQuoteCall() {
    var self = this;
    axios.get(`http://localhost:3000/users/${self.state.theme}`, {
    // axios.get(`http://localhost:3000/users/${self.state.login}`, {
      params: {
        token: this.props.token
      }
    })
    .then(function (response) {
      self.setState({
        theme: response.data.theme_choice
      });
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
        <div className="col-md-6 main-img"><img src={love} alt={"lit heart shaped candle"} className="main-img"/></div>
        <div className="col-md-6 main-content">

          <div className="main-text">
            <DailyQuoteDetail
              dailyQuote={this.state.dailyQuote}
            />
            <h2 className="main-theme">Theme: {this.state.theme}</h2>
          </div>
          <div className="forms">
            <h4>Username: { this.state.username } </h4>
            <h3> Current Theme: {this.state.theme}</h3>
            <ThemeForm
              onThemeInput={this.handleSubmitTheme}
            />
            <PhoneNumForm
              onPhoneInput={this.handleSubmitPhone}
            />
          </div>
        </div>
      </div>
    );
  }
}

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

export default Main;
