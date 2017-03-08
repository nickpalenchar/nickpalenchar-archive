let nickpal = angular.module("nickpal", ['ui.router'])

  .config(function($stateProvider){
    $stateProvider
      .state({
        name: 'home',
        url: '/'
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: '/views/about.html'
      })
      .state({
        name: 'npm',
        url: '/npm',
        templateUrl: '/views/npm/npm.html'
      })
  })
.run(function ($rootScope) {

  $rootScope.$on("$stateChangeSuccess", function (evt, toState) {
    console.log("new transition\n", evt, toState);

    var $menuPanel = $('.menu-panel');
    if(toState.name === 'home')
      $menuPanel.removeClass('collapsed');
    else {
      $menuPanel.addClass('collapsed force');
      var $cachedMenu = $('.about-me', true);
      setTimeout(function () {
        $('body').on('mousemove', function () {
          console.log('mouse move triggered');
          $menuPanel.removeClass('force');
          $('body').off();
        });
      },1020)
    }
  })

})

.controller('main', function($scope){
  $scope.test = 'working';
});