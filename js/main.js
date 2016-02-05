/** @jsx React.DOM */
var React = require('react');
var WeatherApi = require('./utils/WeatherApi');
var WeatherApp = require('./components/WeatherApp.react');

window.require = require;


WeatherApi.getLocation();

React.render(<WeatherApp/>, document.body);