import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


i18next
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || 'en',
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      fr: {
        translation: require('./locales/fr.json'),
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
