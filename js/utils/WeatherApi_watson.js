var WeatherActions = require('../actions/WeatherActions');
var $ = require('jQuery');
var token;

function setTemp(temp){
  WeatherActions.receiveTemperature(temp);
}

function setWeather(weatherStatement) {
  WeatherActions.receiveWeather(weatherStatement);
}

module.exports = {

  getConditions: function() {
    //var data = JSON.parse(localStorage.getItem('conditions'));
    //WeatherActions.receiveConditions(data);


    $.ajax({
      type: 'POST',
      url: "https://gateway.watsonplatform.net/authorization/api/v1/token?url=https://gateway.watsonplatform.net/tradeoff-analytics/api",
      beforeSend: function(xhr) {
        xhr.setRequestHeader ("Authorization", "Basic" + btoa("99d5d596-07ce-492e-8ad0-4c1187d93205" + ":" + "IcTYfR0qHb3X"))
      },
      dataType: 'jsonp'
    }).success(function(data){
      token = data;
      console.log(token);
    })
  },

  getDecisions: function() {

    $.ajax({
      type: 'POST',
      url: "https://gateway.watsonplatform.net/tradeoff-analytics/api",
      headers: {
        "X-Watson-Authorization-Token" : token,
        "X-Watson-Learning-Opt-Out" : "true",
        "Content-Type" : "application/json",
        "Accept" : "*/*"
      },
      dataType: "jsonp"
    }).success(function(data){
        alert('NEW DATA!!');
        setWeather(data.current_observation.weather);
        setTemp(data.current_observation.temp_f);
    });
  }
  }
};