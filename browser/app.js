function simpleState(name){return { name: name, url: '/' + name, templateUrl: 'views/'+name+'/'+name+'.html'}}

var nickpal = angular.module("nickpal", ['ui.router'])

  .config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
      .state({
        name: 'home',
        url: '/'
      })
      .state(simpleState('about'))
      .state(simpleState('npm'))
      .state(simpleState('media'))
      .state(simpleState('sideprojects'))
      .state(simpleState('articles'));
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