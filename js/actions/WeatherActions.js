var AppDispatcher = require('../dispatcher/WeatherDispatcher');
var WeatherConstants = require('../constants/WeatherConstants');

var WeatherActions = {

  receiveTemperature: function(data) {
    AppDispatcher.handleAction({
      actionType: WeatherConstants.UPDATE_TEMP,
      data: data
                               });
  },
  receiveWeather: function(data) {
    AppDispatcher.handleAction({
      actionType: WeatherConstants.UPDATE_WEATHER,
      data: data
                               });
  },

  recieveLocation: function(data) {
    AppDispatcher.handleAction({
      actionType: WeatherConstants.UPDATE_LOCATION,
      data: data
    });
  }


};

module.exports = WeatherActions;