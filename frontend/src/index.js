import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {OrdersContextProvider} from './context/OrderContext'
import {AuthContextProvider} from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <OrdersContextProvider>
          <App />
        </OrdersContextProvider>
    </AuthContextProvider> 
  </React.StrictMode>
);


