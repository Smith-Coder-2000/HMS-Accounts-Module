angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'spa/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'spa/home.html',
            controller:'homectrl'
    }).when('/employee',
    {
        templateUrl:'spa/employee.html',
        controller:'mainCtrl'
    })  
})

.controller('myctrl',function()
{

})

.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="WELCOME TO ADMIN DashBoard"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();
    $http.get('https://smith-coder-2000.github.io/HMS-Accounts-Module/angularJs/employee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
});
