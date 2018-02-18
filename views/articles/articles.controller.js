nickpal.controller('articlesCtrl',function($scope, $http, Env){
  $scope.articles = null;
  $scope.baseUrl = Env.palenserver;

  $http.get(Env.palenserver + '/articles')
    .then(function(response){
      $scope.articles = response.data.map(function(article){
        article.date = parseDate(article.date);
        return article;
      });

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

.controller('singleArticleCtrl', function($scope, $stateParams, $http, Env, $rootScope, $window){
  console.log("state paramsss ", $stateParams);
  $scope.articleUrl = $stateParams.articleUrl;

  $http.get(Env.palenserver + '/articles/' + $stateParams.articleUrl)
    .then(function (res) {
      $scope.article = res.data.body;
      $scope.title = res.data.title;
      $scope.date = parseDate(res.data.date);
      var md = $('#markdown-article')[0];

      md.innerHTML = marked(res.data.body);
      console.log("DIS;?? ", $window.DISQUS);
      $window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = "disqusid" + $stateParams.articleUrl;
          this.page.url = "https://www.nickpalenchar.com/#!newthread";
        }
      });

    })
    .catch(function (res) {
      if(res.status === 404){
        $scope.article = res.data.body;
        $scope.title = "404: \"" + res.data.title + "\"";
        $scope.date = parseDate(res.data.date);
        $scope.fourOfour = true;
        var md = $('#markdown-article')[0];
        md.innerHTML = marked(res.data.body);
      }
    });

  setTimeout(function(){$rootScope.$broadcast('$stateChangeSuccess')},0);
});