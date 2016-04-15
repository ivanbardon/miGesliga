// Author: Ivan Bardon
// Febrero 2016


//Require de los modulos
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jQuery = require('jquery');
var fs = require('fs');


// mongoose.connect('mongodb://localhost/test');


//Configuración
app.set('view engine','jade');
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Rutas

app.get('/', function(req, res){
	res.render('ulldecona')
});

app.get('/vinaros', function(req, res){
	res.render('vinaros')
});


app.get('/yo', function(req, res){
	res.render('yo');
});

function spycona (){
	var lliges = ["193582","193658","193660"]

	lliges.forEach(function(lliga){

		var urlP = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.gesliga.es%2FCalendario.aspx%3FLiga%3D"+lliga+"%20%22%20and%0A%20%20%20%20%20%20xpath%3D'%2F%2F*%5B%40id%3D%22ctl00_CH1_divJornadas%22%5D'&format=json&diagnostics=true";

		var urlR = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fgesliga.es%2FClasificacion.aspx%3FLiga%3D"+lliga+"'%20and%20xpath%3D'%2F%2F*%5B%40id%3D%22ctl00_CH1_grdClasifica%22%5D'&format=json&diagnostics=true";

		request(urlP, function(err, resp, body) {
			fs.writeFile('public/db/ull/U'+lliga+'P.json', body, function (err){
				if(!err){
					console.log('se guardó');
					io.emmit('saveOk', 'se guardó');
				}else{console.log(err)}
			});
		});

		request(urlR, function(err, resp, body) {
			fs.writeFile('public/db/ull/U'+lliga+'R.json', body, function (err){
				if(!err){
					console.log('se guardó');
					io.emmit('saveOk', 'se guardó');
				}else{console.log(err)}
			});
		});
	});
};
function spyroz (){
	var lliges = ["197228","197206","197177","197175","197176","197171","197087","197086","197421","197422"]

	lliges.forEach(function(lliga){

		var urlP = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.gesliga.es%2FCalendario.aspx%3FLiga%3D"+lliga+"%20%22%20and%0A%20%20%20%20%20%20xpath%3D'%2F%2F*%5B%40id%3D%22ctl00_CH1_divJornadas%22%5D'&format=json&diagnostics=true";

		var urlR = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fgesliga.es%2FClasificacion.aspx%3FLiga%3D"+lliga+"'%20and%20xpath%3D'%2F%2F*%5B%40id%3D%22ctl00_CH1_grdClasifica%22%5D'&format=json&diagnostics=true";

		request(urlP, function(err, resp, body) {
			fs.writeFile('public/db/vin/V'+lliga+'P.json', body, function (err){
				if(!err){
					console.log('se guardó');
					io.emmit('saveOk', 'se guardó');
				}else{console.log(err)}
			});
		});

		request(urlR, function(err, resp, body) {
			fs.writeFile('public/db/vin/V'+lliga+'R.json', body, function (err){
				if(!err){
					console.log('se guardó');
					io.emmit('saveOk', 'se guardó');
				}else{console.log(err)}
			});
		});
	});
};

io.on('connection', function(socket){
	socket.on('ull', function(msg){
		console.log(msg);
		spycona();
	});
	socket.on('vin', function(msg){
		console.log(msg);
		spyroz();	
	})
});

//Puerto para servir
http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
