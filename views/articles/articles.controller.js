nickpal.controller('articlesCtrl',function($scope, $http, Env){
  $scope.articles = null;
  $scope.baseUrl = 'http://' + Env.palenserver;

  $http.get(Env.palenserver + '/articles')
    .then(function(response){
      $scope.articles = response.data;
      try{
        $scope.$digest();
      }catch(e){
        setTimeout($scope.$digest, 400);
      }finally {
        setTimeout(function(){
          var el = [].slice.call(document.getElementsByClassName('md-container'));
          el.forEach(function(container, i){
            container.innerHTML = marked(container.innerHTML);
            $scope.articles[i].marked = true;
          })
        },0)
      }
    });
})

.controller('singleArticleCtrl', function($scope, $stateParams, $http, Env, $rootScope){
  console.log("state paramsss ", $stateParams);
  $scope.articleUrl = $stateParams.articleUrl;

  setTimeout(function(){$rootScope.$broadcast('$stateChangeSuccess')},0);
});