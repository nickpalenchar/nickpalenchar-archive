nickpal.controller('npmCtrl', function ($scope, ProjectDirectory) {
  //TODO: This will eventually be a palenserve api call
  console.log("running");
  $scope._projcets = [
    {
      title: "t-minus",
      imageSrc: null,
      description: "A human friendly `setTimeout`/`setInterval`. t-minus provides a class for simple countdown and countup operations. Set multiple timers, toggle pausing, get human readable " +
      "formats for UI's, pass functions to be invoked once or multiple times. And oh so much more.",
      href: "https://www.npmjs.com/package/t-minus",
      role: "Sole developer"
    },
    {
      title: "SundialJS",
      imageSrc: null,
      description: "SundialJS makes it easy to compare dates in a not-too-painful way. Get number of days since epoch time rather than milliseconds. Also provides some useful demonstrations on how to" +
      " detect when a day has passed since the user last visited a site.",
      href: "https://www.npmjs.com/package/sundial-js"
    }
  ];
  $scope.myProjects = [
    {
      title: "t-minus",
      imageSrc: null,
      description: "A human friendly `setTimeout`/`setInterval`. t-minus provides a class for simple countdown and countup operations. Set multiple timers, toggle pausing, get human readable " +
      "formats for UI's, pass functions to be invoked once or multiple times. And oh so much more.",
      href: "https://www.npmjs.com/package/t-minus",
      role: "Sole developer"
    },
    {
      title: "SundialJS",
      imageSrc: null,
      description: "SundialJS makes it easy to compare dates in a not-too-painful way. Get number of days since epoch time rather than milliseconds. Also provides some useful demonstrations on how to" +
      " detect when a day has passed since the user last visited a site.",
      href: "https://www.npmjs.com/package/sundial-js"
    }
  ];
});