import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer';
import SignIn from './pages/SignIn'
import User from './pages/User';
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="sign-in" element={<SignIn/>} />
        <Route path="user" element={<User />} />
      </Routes>
      <Footer/>
    </Router>
    
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

