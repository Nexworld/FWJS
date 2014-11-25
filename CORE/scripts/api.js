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
			todos[i] = todo;
			return todos[i];
		},
		add_todo: function(todo){
			return todos.push(todo);
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