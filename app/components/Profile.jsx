var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Profile = React.createClass({
    getInitialState: function() {
        console.log(this.props)
        return{
            notes: [],
            bio: {},
            repos: []
        }
    },
    render: function(){
      return  (
                <div className="row">
                    <div className="col-md-4">
                        User Profile Component
                    </div>
                    <div className="col-md-4">
                        Repos Component
                    </div>
                    <div className="col-md-4">
                        Notes Component
                    </div>
                </div>
        )
       
    }
});

module.exports = Profile;