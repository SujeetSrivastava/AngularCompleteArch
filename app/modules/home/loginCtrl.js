(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('boon4')
		.controller('LoginCtrl', Login);


	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Login( $state, $stateParams) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, boon4!";
		vm.version = "1.0.0";
		vm.loginID = "";
		vm.loginPwd = "";


		vm.logon = function(){
			//alert('I git clicked login' + vm.loginID + vm.loginPwd );
			$state.transitionTo('home.dashboard');

		}

	}

})();
