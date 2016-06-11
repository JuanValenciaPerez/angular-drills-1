angular.module('App')
  .controller('MainCtrl', function($scope, MainService, LocationService, WeatherService) {
    $scope.text = 'working';

    $scope.quotes = MainService.getQuotes();

    init();

    function init() {
      // getLocation()
      // getWeather()
      getWeatherForCurrentLocation();
    }

    function getWeatherForCurrentLocation() {
      LocationService.getLocation()
        .then(function(city) {
          $scope.city = city;
          return WeatherService.getWeather(city);
        })
        .then(function(temperatureForCurrentLocation) {
          $scope.weather = temperatureForCurrentLocation;
        })
        .catch(function(err) {
          $scope.errorMessage = err;
        });
    }

    // function getLocation() {
    //   LocationService.getLocation()
    //     .then(function(city) {
    //       console.log('City: ', city);
    //       $scope.city = city;
    //     })
    //     .catch(function(err) {
    //       $scope.errorMessage = err;
    //     });
    // }
    //
    // function getWeather() {
    //   WeatherService.getWeather('Berlin')
    //     .then(function(weather) {
    //       $scope.weather = weather;
    //     })
    //     .catch(function(err) {
    //       $scope.errorMessage = err;
    //     });
    // }

  });
