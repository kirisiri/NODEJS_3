/* var fs = require('fs');
var StatMode = require('stat-mode'); 

fs.stat('./coffee.png', function(err, stats) {
	var statMode = new StatMode(stats);
    console.log(statMode.toString());
}); */

var fs = require('fs');
var colors = require('colors');

/*fs.readFile('./text.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem'.blue);
	console.log(data);
	fs.appendFile('./text.txt', '\nA tak wygladaja po zapisie', function(err) {
    	if (err) throw err; 
    	console.log('Zapisano!'.blue);
    	fs.readFile('./text.txt', 'utf-8', function(err, data) {
    		console.log('Dane po zapisie.'.blue);
    		console.log(data);
    	});
	}
	);
}); */
fs.readdir('.', function(err, data2) {
	console.log('List of all files: '.green);
	console.log(data2);
	fs.writeFile('./allFiles.txt', [data2],  function(err) {
    	if (err) throw err; 
    	console.log('Done!'.green);
    	fs.readFile('./allFiles.txt', 'utf-8', function(err, data2) {
    		console.log('Freshly created file: '.rainbow);
    		console.log(data2);
    	});
	});
});
