import React from 'react';

const DailyQuoteDetail = ({dailyQuote}) => {
  if (!dailyQuote) {
    return <div>Loading...</div>;
  }

  return (
    <h2>
      <div>{dailyQuote.text}</div>
      <div> - {dailyQuote.author}</div>
    </h2>

  );
};

export default DailyQuoteDetail;
