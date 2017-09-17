var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Place = require('Place'); 


ReactDOM.render(
    <Router>{Place}</Router>,
    document.getElementById('app')
);