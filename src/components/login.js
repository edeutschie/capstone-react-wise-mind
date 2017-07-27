import React, { Component } from 'react';
import Header from './header.js';
import Button from 'react-toolbox/lib/button/Button';
import axios from 'axios';
import DailyQuoteDetail from './daily_quote_detail';
import lake from './lakeResize.jpg';
import './login.css';


const authorizedUrl = 'https://github.com/login/oauth/authorize'
const clientId = '12cc4cbd0d2ce79f67f4'
const scope = 'user'
// const dotenv = require('dotenv');
// dotenv.config();
// const env = dotenv.load({ path: './env'});
// const clientId = env.parsed.CLIENT_ID;
// const clientId = process.env.CLIENT_ID
// const clientId = ENV['CLIENT_ID']


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      dailyQuote: null,
      theme: 'motivational',
    };

    this.openingQuoteCall();

  }

    openingQuoteCall() {
      var self = this;
      axios.get(`http://wiseminding.vrtxwfzdmp.us-west-2.elasticbeanstalk.com/dailyquotes/motivational`, {
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

  render() {
    return (

      <div className="daily-quote">
        <Header />
        <div className="col-md-6 login-img"><img src={lake} alt={"lake at sunset"}/></div>
        <div className="col-md-6 login-content">
          <div className="button">
            <Button raised primary
              href={`${authorizedUrl}?client_id=${clientId}&scope=${scope}`}>
              Login with Github
            </Button>
          </div>
          <div className="login-text">
            <DailyQuoteDetail dailyQuote={this.state.dailyQuote} />
            <h2 className="login-theme">Theme: {this.state.theme}</h2>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
