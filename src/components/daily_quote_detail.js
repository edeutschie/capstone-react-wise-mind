import React from 'react';

const DailyQuoteDetail = ({dailyQuote}) => {
  if (!dailyQuote) {
    return <div>Loading...</div>;
  }

  return (
    <div className="daily-quote">
      <h1>Quote of the Day</h1>
      <h2>
        <div>{dailyQuote.text}</div>
        <div> - {dailyQuote.author}</div>
      </h2>
    </div>
  );
};

export default DailyQuoteDetail;
