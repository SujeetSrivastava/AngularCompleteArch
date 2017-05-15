'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('boon4')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('login', {
				url:'/login',
				templateUrl: 'app/modules/login/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);
