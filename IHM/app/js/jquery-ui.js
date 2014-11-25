jQuery(document).ready(function($){
	$.ajax({
		url: '/api/todos',
		success: function(data, textStatus, jqXHR){
			console.log("jQuery OK");
		}
	})

	$.fn.extend({
		colorify: function(){
			return this.each(function(){
				$(this).css('color', 'blue')
			})
		}
	})

	$('#jquery').click(function(evt){
		$('li').colorify()
	})
})