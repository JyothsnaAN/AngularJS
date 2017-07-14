var app = angular.module('plunker', []);

app.controller('MyCtrl', function($scope, $http) {
    var base = 'http://api.themoviedb.org/3';
    var service = '/movie/popular';
    var apiKey = 'd2ba37167ca20bf62261be2f992127ca';
    var callback = 'JSON_CALLBACK';
    var url = base + service + '?api_key=' + apiKey + '&callback=' + callback;

    $scope.result = 'requesting...';
    
    $http.jsonp(url).then(function(data, status) { 
      $scope.result = JSON.stringify(data); 
    },function(data, status) {
      $scope.result = 'Maybe you missed your API key?\n\n' + JSON.stringify(data);
    });
});

