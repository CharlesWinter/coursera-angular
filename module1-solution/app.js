(function () {
'use strict';

angular.module('MessageApp', [])
.controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
function MsgController($scope) {

  $scope.name = "Charles";

  $scope.sayMessage = function() {
    return "Test message";
  };

}

})();
