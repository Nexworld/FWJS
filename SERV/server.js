'use strict';

(function () {
  var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    
  var todoStore = require('./services/todo-store');

  var app = express();

  // MiddleWares
  app.use(cors());
  app.use(bodyParser.json());

  // Static files
  app.use('/swagger', express.static('swagger'));

  // Routes
  app.get('/api/todos', function (req, res, next) {
    res.json(todoStore.list());
  });

  app.post('/api/todos', function (req, res, next) {
    var item = {
      title: req.body.title,
      description: req.body.description
    };
    res.json(todoStore.add(item));
  });

  app.delete('/api/todos', function (req, res, next) {
    todoStore.clear();
    res.sendStatus(200);
  });

  app.get('/api/todos/:id', function (req, res, next) {
    var item = todoStore.get(parseInt(req.params.id));
    if(!item) {
      return res.status(404).json({ code: 404, message: "Item not found" })
    }
    res.json(item);
  });

  app.delete('/api/todos/:id', function (req, res, next) {
    todoStore.remove(parseInt(req.params.id));
    res.sendStatus(200);
  });

  app.put('/api/todos/:id', function (req, res, next) {
    var item = {
      title: req.body.title,
      description: req.body.description
    };
    
    item = todoStore.set(parseInt(req.params.id), item);
    if(!item) {
      return res.status(404).json({ code: 404, message: "Item not found" })
    }
    res.json(item);
  });

  // Listen on port 8000 for dev purposes
  app.listen(8000, function() {
    console.log("App listen on port 8000");
  });
})();