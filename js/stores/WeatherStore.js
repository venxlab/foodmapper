var AppDispatcher = require('../dispatcher/WeatherDispatcher');
var EventEmitter = require('events').EventEmitter;
var WeatherConstants = require('../constants/WeatherConstants');
var _ = require('underscore');

// var restaurauntResponse = [{name: 'Pizza Hut', menu: [{category:'pizza', calories:300}], proximity: 0.3}];

var _userScore;
var _restaurants;
var _restaurantScores;

function setRestaurantScores(restaurantResponse, food) {
_restaurantScores = _.compact(_.map(restaurantResponse, function(restaurant){ return (_.contains(_.pluck(restaurant.menu, "category"), food)) ? {restaurant: restaurant, score: (_.find(restaurant.menu, {category: food}).calories * restaurant.proximity ) } : null } ));
}

function setUserScore(proximity, cal) {
  _userScore = (proximity * cal);
}

var WeatherStore = _.extend({}, EventEmitter.prototype, {
  getDecision: function(food, proximity, cal) {
    setUserScore(proximity, cal);

    setRestaurantScores([{name: 'Pizza Hut', menu: [{category:'pizza', calories:300}], proximity: 0.3}], food);

    return _restaurantScores;

    console.log(food)
    console.log(proximity)
    console.log(cal)

  }
});


module.exports = WeatherStore;
