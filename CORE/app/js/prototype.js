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

	$$('li').each(function(li, i, lis){
		Element.extend(li)
	})

	$('prototype').observe('click', function(evt){
		lis.each(function(li, i, lis){
			li.colorify()
		})
	})

})