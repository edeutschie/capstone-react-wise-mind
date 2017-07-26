import React from 'react';
import './daily_quote_detail.css';

const DailyQuoteDetail = ({dailyQuote}) => {
  if (!dailyQuote) {
    return <div>Loading...</div>;
  }

  return (
    <div className="daily-quote">
      <h1>Quote of the Day</h1>
      <h2 className="quote-text">
        <div >{dailyQuote.text}</div>
        <div className="author"> - {dailyQuote.author}</div>
      </h2>
    </div>
  );
};

export default DailyQuoteDetail;
