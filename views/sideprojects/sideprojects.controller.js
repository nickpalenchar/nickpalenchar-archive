nickpal.controller('sideprojectsCtrl',function ($scope, Env) {
  $scope.mySideprojects = [
    {
      title: "Postwoman",
      description: "An API request-builder in the browser",
      href: "https://postwoman.io",
      role: "Contributor & Maintainer"
    },
    {
      title: "TinyTiny",
      description: "An open-source url shortener with customizable options via simple config files",
      href: "https://github.com/nickpalencharopen/tinytiny",
      role: "💻 Open Source!"
    },
    {
      title: "Map-My-Dom",
      role: "Sole developer",
      imageSrc: Env.palenserver + "/public/images/sideprojects/mapmydom.png",
      description: "DOM-tree to ASCII-text tree parser."
    },
    {
      title: "Eat Tomatoes",
      href: "https;//eattomatoes.herokuapp.com",
      imageSrc: Env.palenserver + "/public/images/sideprojects/eattomatoes.png",
      description: "Pomodoro App keeping track of number of pomodoros completed daily, with built in breaks and historic user data.",
      role: "Sole developer"
    }
  ];

  $scope.libraries = [
    {
      title: "endpoint.io",
      description: "Express middleware that wraps around socket.io, which manages the socket object as a singleton, and exposes it for use in API endpoints.",
      href: "https://www.npmjs.com/package/endpoint.io",
      role: "npm i endpoint.io"
    },
    {
      title: "t-minus",
      imageSrc: null,
      description: "A human friendly `setTimeout`/`setInterval`. t-minus provides a class for simple countdown and countup operations. Set multiple timers, toggle pausing, get human readable " +
        "formats for UI's, pass functions to be invoked once or multiple times. And oh so much more.",
      href: "https://www.npmjs.com/package/t-minus",
      role: "npm i t-minus"
    },
    {
      title: "gift-wrap",
      imageScr: null,
      description: "An interactive CLI that allows you to turn your own javascript files into CLI, turning arguments into option flags you can set in your terminal.",
      href: "https://www.npmjs.com/package/@npalenchar/giftwrap",
      role: "npm i -g @npalenchar/giftwrap"
    },
  ]
});