(function (angular) {
	'use strict';

	angular.module('todomvc', ['ngRoute'])
		.config(function ($routeProvider) {

			var routeConfig = {
				controller: 'TodoCtrl',
				templateUrl: 'partials/todomvc-index.html'
			};

			$routeProvider
				.when('/', routeConfig)
				.when('/:status', routeConfig)
				.otherwise({
					redirectTo: '/'
				});
		});
})(window.angular);