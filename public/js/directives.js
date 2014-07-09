angular.module('bloodlines-directives', []).
  // directive('appVersion', ['version', function(version) {
  //   return function(scope, elm, attrs) {
  //     elm.text(version);
  //   };
  directive('characterProfile', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/character-profile'
    }
  });