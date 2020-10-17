import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you are rewriting an existing app to React, you can render components separately.
// Component 'Footer' has to be defined somewhere, ofc.
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);
