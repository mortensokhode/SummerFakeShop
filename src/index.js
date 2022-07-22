import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";

// changed slightly to accommodate the new react-dom version
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

