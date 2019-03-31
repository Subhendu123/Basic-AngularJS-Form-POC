angular.module('Forms.Controllers').factory('FormServices',FormServices);
FormServices.$inject = ['$http']

function FormServices($http){
	var baseUrl = 'https://localhost:8070';
	var formServices = {
			saveEmployeeDetails : saveEmployeeDetails,
			validateForm : validateForm
	};
	function saveEmployeeDetails(empObj){
		return $http.get(baseUrl+'/abc.php/?info='+empObj);
		//return empObj;
	};
	
	function validateForm(info){

		var errorField = false;//No error if this field is set to true
		if(!info.fullName || !/^[a-zA-Z ]*$/.test(info.fullName)){
			info.displayErrorName = true;
			errorField = true;
		}
		
		if(!info.address || /^[<>]$/.test(info.address)){
			info.displayErrorAddress = true;
			errorField = true;
		}
		
		if(!info.birthDay || info.birthDay > new Date()){
			info.displayErrorDate = true;
			errorField = true;
		}
		
		if(!info.status){
			info.displayErrorStatus = true;
			errorField = true;
		}
		
		if(!info.employeeLocation){
			info.displayErrorLocation = true;
			errorField = true;
		}
		if(!info.exp || info.exp.length == 0){
			info.displayErrorExp  = true;
			errorField = true;
		}
		return errorField;
			
	
	}
	return formServices;
}