import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log("in list render");
    console.log(this.props.quotes);
    return <ul> {this.props.quotes.map(this.renderItem)} </ul>;
  }

  renderItem(quote) {
    return <li key={quote.id}>{quote.text}</li>;
  }
}

export default List;


// const List = (props) => {
//
//   return (
//     <ul> {this.props.quotes.map(this.renderItem)} </ul>;
//
//     renderItem(quote) {
//       return <li key={quote.id}>{quote.text}</li>;
//     }
//   );
// };
