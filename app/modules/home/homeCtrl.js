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
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, boon4!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		vm.flagSearch = false;
		
		vm.drivData=[
        {
        	"firstname":"Tiger",
        	"lastname":"Nixon",
        	"email":"tiger@sg.com",
        	"contactno":"13123123132",
        	"status":"true"
        },
        {
        	"firstname":"Zoe",
        	"lastname":"Ammp",
        	"email":"Zoe@sg.com",
        	"contactno":"1234123132",
        	"status":"false"
        },
        {
        	"firstname":"Trigger",
        	"lastname":"Zaam",
        	"email":"tzam@sg.com",
        	"contactno":"22223123132",
        	"status":"true"
        },
        {
        	"firstname":"Glly",
        	"lastname":"Nixon",
        	"email":"gniox@sg.com",
        	"contactno":"14443123132",
        	"status":"true"
        },
        {
        	"firstname":"Piggeer",
        	"lastname":"Nixon",
        	"email":"pigrr@sg.com",
        	"contactno":"18888823132",
        	"status":"true"
        },
        {
        	"firstname":"Rommy",
        	"lastname":"Joe",
        	"email":"RJoe@sg.com",
        	"contactno":"9999123132",
        	"status":"false"
        },
        {
        	"firstname":"digp",
        	"lastname":"dpp",
        	"email":"dipp@sg.com",
        	"contactno":"77763123132",
        	"status":"true"
        },
        {
        	"firstname":"landy",
        	"lastname":"lix",
        	"email":"lanndy@sg.com",
        	"contactno":"13998873132",
        	"status":"true"
        }
           
    ]


vm.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
	}

})();
