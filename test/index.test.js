var wru = require('wru');
var collection = [];
var cleanUpString = require('./..');

collection.push({
	name: 'cleanUpString function',
	test: function() {
		wru.assert('cleanUpString function exists', typeof cleanUpString == 'function');
		wru.assert(`Clean up 'Привет'`, cleanUpString('Привет') == 'privet');
	}
});

wru.test(collection);