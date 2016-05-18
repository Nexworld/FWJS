'use strict';

(function (jQuery) {
	jQuery(document).ready(function ($) {

		$('#jquery-list').click(function (evt) {
			console.info("Starting jQuery Ajax call to /api/todos");
			$.ajax({
				type: 'GET',
				url: BASE_URL + '/api/todos',
				success: function (data, textStatus, jqXHR) {
					console.info("Data received with jQuery");
					console.log(data);

					updateTodoList(data);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					$log.error(textStatus);
				}
			});
		});

		function updateTodoList(data) {
			$("ul#jquery-todos").empty();
			for (var item of data) {
				$("ul#jquery-todos").append('<li><b>' + item.title + '</b><br /><i>' + item.description + '</i></li>');
			}
		}

	});
})(window.jQuery);