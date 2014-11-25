exports.TodoApi = (function(){
	var todos = [{
		title: 'test',
		description: 'ceci est un test'
	}];

	var TodoApi = {
		get_todos: function(){
			return todos;
		},
		get_todo: function(i){
			return todos[i];
		},
		set_todo: function(i, todo){
			if (todo){
				todos[i] = todo;
				return todos[i];
			}else{
				return null;
			}
		},
		add_todo: function(todo){
			if (todo){
				return todos.push(todo);
			}else{
				return null;
			}
			
		},
		remove_todo: function(i){
			return todos.splice(i);
		}
		,
		empty_todos: function(i){
			todos.length = 0;
			return todos;
		}
	}

	return TodoApi;
})();