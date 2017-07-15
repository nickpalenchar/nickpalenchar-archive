nickpal.controller('articlesCtrl',function($scope, $http, Env){
  $scope.articles = null;
  $scope.baseUrl = 'http://' + Env.palenserver;

  $http.get('http://'+Env.palenserver + '/articles')
    .then(function(response){
      $scope.articles = response.data;
      try{
        $scope.$digest();
      }catch(e){
        setTimeout($scope.$digest, 400);
      }finally {
        // parseMarkdown();
      }
    });

  // setTimeout(function(){$scope.loading = false; $scope.$digest()}, 2000);

});