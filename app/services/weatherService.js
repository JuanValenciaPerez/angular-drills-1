angular.module('App')
  .factory('WeatherService', function($http) {

    function getWeather(location) {
      var encodedLocation = encodeURIComponent(location);
  		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
  			encodedLocation +
  			'&units=metric' +
  			'&appid=63f04dd2d6d2ee1789398ea8f80ffa20';

  		console.log(url);

      return $http({
        method: 'GET',
        url: url
      }).then(function(res) {
        console.log('Weather: ', res);
        return res.data.main.temp;
      }, function(err) {
        console.log('err: ', err);
      });
    }

    return {
      getWeather: getWeather
    };

  });
