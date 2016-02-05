var WeatherActions = require('../actions/WeatherActions');
var $ = require('jQuery');
var token;
var restaurauntResponse = [{name: 'Pizza Hut', menu: [{category:'pizza', calories:'300'}], proximity: 0.3}];

function setTemp(temp){
  WeatherActions.receiveTemperature(temp);
}

function setWeather(weatherStatement) {
  WeatherActions.receiveWeather(weatherStatement);
}

function setLocation(loc){
  WeatherActions.recieveLocation(loc);
}

module.exports = {

  getLocation: function() {
    //var data = JSON.parse(localStorage.getItem('conditions'));
    //WeatherActions.receiveConditions(data);

    setLocation({
      proximity: 41.8369,
      lon: 87.6847
    });
  }


};