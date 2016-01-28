'use strict';

var angular = require('angular');
var debugDefinition = require('../cam-widget-debug');

var debugModule = angular.module('debugModule', []);
debugModule.directive('camWidgetDebug', debugDefinition);


var testModule = angular.module('testModule', [debugModule.name]);
testModule.controller('testController', [
  '$scope',
function(
  $scope
) {
  $scope.varToDebug = {
    something: {
      to: {
        debug: new Date()
      }
    },
    array: 'abcdef'.split('')
  };
}]);


angular.element(document).ready(function() {
  angular.bootstrap(document.body, [testModule.name]);
});