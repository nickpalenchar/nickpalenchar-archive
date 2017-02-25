let nickpal = angular.module("nickpal", ['ui.router'])

  .config(function($stateProvider){
    $stateProvider
      .state({
        name: 'about',
        url: '/about',
        templateUrl: '/views/about.html'
      })
  })

.controller('main', function($scope){
  $scope.test = 'working';
});