angular.module('App')
  .service('LocationService', function($http) {

    this.getLocation = function() {
      return $http({
        method: 'GET',
        url: 'http://ipinfo.io'
      }).then(function(whatever) {
        // console.log('city: ', whatever.data.city);
        return whatever.data.city;
      }, function(err) {
        console.log('err: ', err);
      });
    };

  });
