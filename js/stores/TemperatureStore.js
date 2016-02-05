var AppDispatcher = require('../dispatcher/WeatherDispatcher');
var EventEmitter = require('events').EventEmitter;
var WeatherConstants = require('../constants/WeatherConstants');
var _ = require('underscore');

var _location;


function loadLocation(location) {
  _location = location;
}

var TemperatureStore = _.extend({}, EventEmitter.prototype, {

  getLocation: function() {
    return _location;
  },
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case WeatherConstants.UPDATE_LOCATION:
      loadLocation(action.data);
      break;

    default:
      return true;
  }

  TemperatureStore.emitChange();

  return true;
});

module.exports = TemperatureStore;