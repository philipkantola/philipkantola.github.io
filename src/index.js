import React from 'react';
import ReactDOM from 'react-dom';
import "./components/App/App.css";
import "./components/home/home.css";
import "./components/searchBar/searchBar.css";
import "./components/cityPage/cityPage.css";
import "./components/countryPage/countryPage.css";
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
