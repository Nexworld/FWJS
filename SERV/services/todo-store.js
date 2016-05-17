'use strict';

var _ = require('underscore');

module.exports = (function () {
	var currentId = 1;
	var dataStore = [{
		id: currentId++,
		title: 'Faire ses courses',
		description: 'Acheter des sapins',
		timestamp: Date.now()
	}];

	var todoService = {
		list: function () {
			return dataStore;
		},
		get: function (id) {
			return _.findWhere(dataStore, {id: id});
		},
		set: function (id, item) {
			if (item) {
				var itemToSet = _.findWhere(dataStore, {id: id});
				if(itemToSet) {
					item.id = id;
					item.timestamp = Date.now();
					return _.extend(itemToSet, item) ;
				}
			}
			return null;
		},
		add: function (item) {
			if (item) {
				item.id = currentId++;
				item.timestamp = Date.now();
				dataStore.push(item);
				return item;
			}
			return null;
		},
		remove: function (id) {
			dataStore = _.reject(dataStore, {id: id});
		},
		clear: function () {
			dataStore.length = 0;
			return true;
		}
	}

	return todoService;
})();