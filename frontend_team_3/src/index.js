
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/user";
import profileReducer from "./features/profile";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer
  }
})
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


