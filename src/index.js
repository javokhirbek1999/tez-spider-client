import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axiosInstance from './axios';
import './index.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import App from './App';
import Header from './components/Header'
import Footer from './components/Footer'

axiosInstance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axiosInstance.defaults.xsrfCookieName = "csrftoken";


const routing = (
   <Router>
     <React.StrictMode>
        <Header />
            <Routes>
              <Route path='/' element={<App />} />
            </Routes>
        <Footer />
     </React.StrictMode>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
