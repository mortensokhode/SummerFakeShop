import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App';

import calculatorSlice from './features/calculatorSlice'
import themeSlice from './features/theme'

const store = configureStore({
  reducer: {calculator: calculatorSlice,
            theme: themeSlice, 
          },
})
// changed slightly to accommodate the new react-dom version

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className="App colorSchema">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </div>
)


