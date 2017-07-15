function simpleState(name){return { name: name, url: '/' + name, templateUrl: 'views/'+name+'/'+name+'.html'}}

var articlesState = {
  name: 'articles',
  url: '/articles',
  templateUrl: 'views/articles/articles.html',
  controller: 'articlesCtrl'
};
var singleArticleState = {
  name: 'singleArticle',
  url: '/articles/:articleUrl',
  template: '<h1>hello{{articleUrl}}</h1>',
  controller: 'singleArticleCtrl'
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
      .state(articlesState)
      .state(singleArticleState);
  })

.factory('Env', function () {
  return {palenserver: 'nickpalenserve.herokuapp.com'}
})

.run(function ($rootScope, $http, Env) {

  $rootScope.$on("$stateChangeSuccess", function (evt, toState) {
    console.log("new transition\n", evt, toState);
    console.log("STATECHONGEEE");
    toState = toState || "ect";
    handleMenu(toState);

  });
  console.log('RUNNUNG');
  $http.get('/env').then(function(res){
    Env.palenserver = res.data.env;
  })
})
  
.controller('main', function($scope){
  $scope.test = 'working';
});

function handleMenu(toState){
  var $menuPanel = $('.menu-panel');
  // if there is no menu, page is still loading. Keep checking
  if(!$menuPanel.length) return setTimeout(function(){handleMenu(toState)},10);

  // hackey annimation for collapsing the menu panel
  if(toState.name === 'home')
    $menuPanel.removeClass('collapsed');
  else {
    console.log("STATECHONGEEEE ELSEE");
    $menuPanel.addClass('collapsed force');
    var $cachedMenu = $('.about-me', true);
    setTimeout(function () {
      $('body').on('mousemove', function () {
        $menuPanel.removeClass('force');
        $('body').off();
      });
    },1020)
  }
}