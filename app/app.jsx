var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require('Main');
var Checker = require('Checker');

import '../playground/firebase/index.js';

    ReactDOM.render(
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
          <IndexRoute component={Checker} />
          </Route>
        </Router>,
        document.getElementById('app')
     );
     
     
    