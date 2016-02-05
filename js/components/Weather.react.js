var React = require('react');


var Weather = React.createClass({
  render: function(){
    return (
           <div>{this.props.weather}</div>

)
  }
                                    });

module.exports = Weather;