var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){
	
	//Variable initialization [Start].
	$scope.countries=[];
	$scope.countryDetails={};
	$scope.hideData=false;
	//Variable initialization [End].
	
	// To get all countries using an API[Start].
	$http.get('https://restcountries.eu/rest/v2/all').then(function(response){
			  $scope.countries=response.data;
	 });
	// To get all countries using an API[End].
	
	//To get country details by passing country name[Start].
	$scope.getCountryDetails=function(name){
		$scope.hideData=true;;
		$http.get('https://restcountries.eu/rest/v2/name/'+name).then(function(response){
			  $scope.countryDetails=response.data;
			  	 });
	};
	//To get country details by passing country name[End].
	
});