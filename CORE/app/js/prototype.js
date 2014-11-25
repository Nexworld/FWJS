document.observe('dom:loaded', function(){
	new Ajax.Request('/api/todos', {
		method: 'get',
		onSuccess: function(response){
			console.log("PrototypeJS OK");
			console.log(response.responseText.evalJSON());
		// Prototype n'a pas interprete la chaine de caractere
		// comme du JSON...
		}
	})

	Element.addMethods({
		colorify: function(element){
			$(element).setStyle({
				color: 'red'
			})
		}
	})

	var lis = $$('li');
	lis.each(function(li, i, lis){
		Element.extend(li)
	})

	var btn = $('prototype');

	btn.observe('click', function(evt){
		lis.each(function(li, i, lis){
			li.colorify()
		})
	})

})