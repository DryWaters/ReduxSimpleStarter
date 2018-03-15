import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  This component should product 
// some HTML

// Take this component's generated HTML and put it
// on the page (in the DOM)

const App = () => {
  return <div>Hi!</div>
}

ReactDOM.render(<App/>, document.querySelector('.container'));