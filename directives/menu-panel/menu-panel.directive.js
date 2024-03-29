nickpal.directive('npMenuPanel', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/menu-panel/menu-panel.template.html',
    scope: {
      title: '=title',
      titleBold: '=titleBold',
      titleFinal: '=titleFinal',
      panelBackground: '=color',
      pic: '=pic',
      ref: '=ref'
    },
  }
});