
// Create AngularJS application
var app = angular.module('demoLearningTurn',[]);


// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.today = new Date();
    $http.get('http://localhost:3000/patient')
    .success(function(response)
    {
        //emp=JSON.parse(response.patient)
        $scope.names=response.patient;
        console.log(response.patient)
    });
});

    




