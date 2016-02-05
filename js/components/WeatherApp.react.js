var React = require('react');
var TemperatureStore = require('../stores/TemperatureStore');
var Temperature = require('../components/Temperature.react');
var WeatherStore = require('../stores/WeatherStore');
var Weather = require('../components/Weather.react');
var WeatherApi = require('../utils/WeatherApi');

function getState() {
  return {
    location: TemperatureStore.getLocation(),
    food: 'test',
    proximity: 'test',
    cal: 'test'
  }
}

var WeatherApp = React.createClass({

  getInitialState: function() {
    return getState();
  },
                                     updateLocation: function() {
                                       WeatherApi.getLocation();
                                     },


                                     componentDidMount: function() {
    TemperatureStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TemperatureStore.removeChangeListener(this._onChange);
  },

  handleFoodChange: function(event) {
    this.setState({food: event.target.value})
  },
  
  handleProximityChange: function(event) {
    this.setState({proximity: event.target.value})
  },
  
  handleCalChange: function(event) {
    this.setState({cal: event.target.value})
  },

  getDecision: function() {
    console.log(WeatherStore.getDecision(this.state.food, this.state.proximity, this.state.cal));

  },

  render: function() {
    return (
           <div>
           <input type='text' value={this.state.food} onChange={this.handleFoodChange} />
           <input type='text' value={this.state.proximity} onChange={this.handleProximityChange} />
           <input type='text' value={this.state.cal} onChange={this.handleCalChange} />

           <button type='submit' onClick={this.getDecision}>Get Decision</button>

           <button type="button" className="Update Temperature" onClick={this.updateLocation}>Get Current Conditions</button>
           <div >Temperature:
                            <Temperature location={this.state.location} />
           </div>
           <div>
             <Weather weather={this.state.weather} />
           </div>
             </div>
          )
},
_onChange: function() {
  this.setState(getState());
}
                                });


module.exports = WeatherApp;