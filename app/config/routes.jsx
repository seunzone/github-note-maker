var React = require('react');
var Main = require('Main');
var Home = require('Home');
var Profile = require('Profile');
var Test = require('Test');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var Place = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="profile/:username" component={Profile} />
            <Route path="test" component={Test} />
                <IndexRoute component={Home}/>
        </Route> 
    </Router>
);
module.exports = Place;