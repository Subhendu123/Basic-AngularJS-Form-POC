angular.module('Forms.Controllers')
.controller('displayCtrl',displayCtrl)

function displayCtrl($scope){
	
	console.log('in directive controller');
	$scope.gridOptions = {

			enableSorting: true,

			columnDefs: [
				{ field: 'fullName', displayName : 'NAME' , visible : true},
				{ field: 'address' , displayName : 'Address'},
				{ field: 'birthDay',displayName : 'DOB', cellFilter : 'date' },
				{ field: 'status' ,displayName : 'Status'},
				{ field: 'employeeLocation' ,displayName : 'Location'},
				{ field: 'experience' , displayName : 'Experience'}
			],
			data : []
	};
	
	$scope.gridOptions.data = $scope.dispinfo;
}