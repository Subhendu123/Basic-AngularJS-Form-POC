angular.module('Forms.Controllers')
.directive('displayDetails',displayDetails);

function displayDetails(){
	return {
		restrict : 'EA',
		scope : {
			dispinfo : '=detailedinfo'
		},
		templateUrl: '../client/customDirectives/display.html',
		controller : 'displayCtrl'
	};
}