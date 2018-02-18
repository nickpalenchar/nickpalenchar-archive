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
      console.log("resss ss uhocruhr., ", typeof res.data.date);
      $scope.date = parseDate(res.data.date);
      console.log("DATAAA ", $scope.date);
      var md = $('#markdown-article')[0];

      md.innerHTML = marked(res.data.body);

      function resetDisqus(timeout){
        timeout = timeout || 1;
        if(!$window.DISQUS){
          return setTimeout(function(){resetDisqus(timeout*2)},timeout);
        }
        console.log("RESETTING THE THING? ", String(new Date(res.data.date).getTime()));
        try {
          $window.DISQUS.reset({
            reload: true,
            config: function () {
              this.page.identifier = String(new Date(res.data.date).getTime());
              this.page.url = "https://www.nickpalenchar.com/#!newthread";
            }
          });
        }
        catch (e) {
          console.log("DISQUS ERROR ");
          console.dir(e);
        }
      }

      resetDisqus();

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