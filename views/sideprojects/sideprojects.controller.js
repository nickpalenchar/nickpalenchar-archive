nickpal.controller('sideprojectsCtrl',function ($scope, Env) {
  $scope.mySideprojects = [
    {
      title: "Eat Tomatoes",
      imageSrc: Env.palenserver + "/public/images/sideprojects/eattomatoes.png",
      description: "Description coming soon",
      role: "Sole developer"
    },
    {
      title: "Map-My-Dom",
      imageSrc: Env.palenserver + "/public/images/sideprojects/mapmydom.png",
      description: "Description coming soon"
    }
  ];
});