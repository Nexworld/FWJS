(function(){

  var express = require('express'),
      bodyParser = require('body-parser')
      api = require('./scripts/api');

  var app = express();
  // set the view engine to ejs
  app.set('view engine', 'ejs');

  // MiddleWares
  app.use(bodyParser.urlencoded({ extended: false }))
    .use('/app', express.static(__dirname + '/app'));

  // Routes
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('/api/todos', function(req, res){
    res.setHeader('Content-type', 'text/json');
    var json = api.TodoApi.get_todos();
    res.end(JSON.stringify(json));
  });

  app.post('/api/todos', function(req, res){
    res.setHeader('Content-type', 'text/json');
    var todo = req.body.todo;
    var json = api.TodoApi.add_todo(todo);
    res.end(JSON.stringify(json));
  });

  app.delete('/api/todos', function(req, res){
    res.setHeader('Content-type', 'text/json');
    var json = api.TodoApi.empty_todos();
    res.end(JSON.stringify(json));
  });

  app.get('/api/todos/:id', function(req, res){
    res.setHeader('Content-type', 'text/json');
    var id = req.params.id;
    var json = api.TodoApi.get_todo(id);
    res.end(JSON.stringify(json));
  });

  app.delete('/api/todos/:id', function(req, res){
    res.setHeader('Content-type', 'text/json');
    var id = req.params.id;
    var json = api.TodoApi.remove_todo(id);
    res.end(JSON.stringify(json));
  });

  app.put('/api/todos/:id', function(req, res){
    res.setHeader('Content-type', 'text/json');
    var id = req.params.id;
    var todo = req.body.todo;
    var json = api.TodoApi.set_todo(id, todo);

    res.end(JSON.stringify(json));
  });


  // Listen on port 8000 for dev purposes
  app.listen(8080);
})();