// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Header from './components/Header/Header';
import Translator from './components/TranslatorFolder/Translator';
import History from './components/History/History';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Team from './components/About/Team'; // Assuming you have a Team component
import LetsTranslate from './components/LetsTranslate/LetsTranslateMain'; // Assuming you have a LetsTranslate component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<LetsTranslate />} /> {/* Render LetsTranslate on home route */}
          <Route path="/translatorapp" element={<Translator />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
          {/* Add more routes as needed */}
        </Routes>
      {/* </Layout> */}
    </Router>
  </React.StrictMode>
);