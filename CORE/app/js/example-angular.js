'use strict';

(function (angular) {
	angular.module('app', []);

	angular.module('app')
		.controller('AppController', function ($scope, $log, $http) {
			$scope.todoItems = [];
			$scope.list = todosList;

			//////////

			function todosList() {
				$log.info("Starting Angular Ajax call to /api/todos");
				$http({
					method: 'GET',
					url: BASE_URL + '/api/todos'
				}).then(function (response) {
					$log.info("Data received with Angular");
					$log.log(response.data);

					updateTodoList(response.data);
				}).catch(function (response) {
					$log.error(response);
				});
			}

			function updateTodoList(data) {
				$scope.todoItems = data;
			}
		});
})(window.angular);

