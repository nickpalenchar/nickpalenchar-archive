function simpleState(name){return { name: name, url: '/' + name, templateUrl: 'views/'+name+'/'+name+'.html'}}

var articlesState = {
  name: 'articles',
  url: '/articles',
  templateUrl: 'views/articles/articles.html',
  controller: 'articlesCtrl'
};

var nickpal = angular.module("nickpal", ['ui.router'])

  // .component('articles', {
  //   bindings: { articles: '<' },
  //   templateUrl: 'views/articles/articles.html'
  // })

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
      .state(articlesState);
  })

.factory('Env', function () {
  return {palenserver: 'nickpalenserve.herokuapp.com'}
})

.run(function ($rootScope, $http, Env) {

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
  });
  console.log('RUNNUNG');
  $http.get('/env').then(function(res){
    Env.palenserver = res.data.env;
  })
})

.value('PALENSERVE', function () {

})

.controller('main', function($scope){
  $scope.test = 'working';
});