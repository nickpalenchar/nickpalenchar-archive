nickpal.controller('npmCtrl', function ($scope, ProjectDirectory) {
  //TODO: This will eventually be a palenserve api call
  console.log("running");
  $scope._projcets = [
    {
      title: "gift-wrap",
      imageScr: null,
      description: "An interactive CLI that allows you to turn your own javascript files into CLI, turning arguments into option flags you can set in your terminal.",
      href: "https://www.npmjs.com/package/@npalenchar/giftwrap",
      role: "Sole developer"
    },
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
  $scope.mySideprojects = [
    {
      title: "endpoint.io",
      description: "Express middleware that wraps around socket.io, which manages the socket object as a singleton, and exposes it for use in API endpoints.",
      href: "https://www.npmjs.com/package/endpoint.io",
      role: "npm i endpoint.io"
    },
    {
      title: "gift-wrap",
      imageScr: null,
      description: "An interactive CLI that allows you to turn your own javascript files into CLI, turning arguments into option flags you can set in your terminal.",
      href: "https://www.npmjs.com/package/@npalenchar/giftwrap",
      role: "npm i -g @npalenchar/giftwrap"
    },
    {
      title: "t-minus",
      imageSrc: null,
      description: "A human friendly `setTimeout`/`setInterval`. t-minus provides a class for simple countdown and countup operations. Set multiple timers, toggle pausing, get human readable " +
      "formats for UI's, pass functions to be invoked once or multiple times. And oh so much more.",
      href: "https://www.npmjs.com/package/t-minus",
      role: "npm i gift-wrap"
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
