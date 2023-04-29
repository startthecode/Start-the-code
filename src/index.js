import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { CartContext, FilterContext } from './Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<CartContext> 
    <FilterContext>
    <Router>
    <ToastContainer position={'bottom-center'} />
    <App />
    </Router>
    </FilterContext>
    </CartContext>
  </React.StrictMode>
);
