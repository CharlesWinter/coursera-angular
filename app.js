(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.parseInput = function() {
    //Get the list from the page
    var listToParse = $scope.inputlist;

    //split the number of items on the number of commas

    if(listToParse) {
      var parsedList = listToParse.split(',');

      //Need to remove all blank entries from the list
      for(var i = 0; i < parsedList.length;i++) {
        if(parsedList[i] == " " || parsedList[i] == "") {
          parsedList.splice(i,1);
          i--;
        }
      }

      console.debug(parsedList);
      if (parsedList.length <= 3) {
        $scope.warningLabel = "Enjoy!";
        $scope.warningColor = "green";
      }
      else {
        $scope.warningLabel = "Too much!";
        $scope.warningColor = "green";
      }
    }
    else {
        $scope.warningLabel = "Please enter data first";
        $scope.warningColor = "red";
    }
  };
}

})();
