import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

// changed slightly to accommodate the new react-dom version
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App colorSchema">
      <App />
  </div>
);

