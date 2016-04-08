var parellesAux = [];
var partitsAux = [];
var parelles;
var jornades;
var partits;
var jornadesData;


var idLliga8vin = "197228";
var idLliga7vin = "197206";
var idLliga6vin = "197177";
var idLliga5vin = "197176";
var idLliga4vin = "197175";
var idLliga3vin = "197171";
var idLliga2vin = "197087";
var idLliga1vin = "197086";
var idLligaAllAvin = "197421";
var idLligaAllBvin = "197422";


$(document).ready(function () {

	$.getJSON('/db/vin/V197177R.json', function(data){

    	$('#loader').html('<h1>Ja!!<h1>');

    	var filterData = data.query.results.table.tbody.tr.slice(1);

    	filterData.forEach(function(data){
    		var parella = data.td;
    		parellesAux.push(parella)
    	});

    	var ParellesCollection = Backbone.Collection.extend({
    		model: ParellaVin
    	});

    	parelles = new ParellesCollection(parellesAux);

    	var parellaView = new ParellaView({el:$('#clasific'), collection: parelles})

    });

    $.getJSON('/db/vin/V197177P.json', function(data){

        // Objecte en totes les jornades
        jornadesData = data.query.results.div.div;
        

        // Iterem sobre cada jornada
            jornadesData.forEach(function (data){
            var numJornada = data.table[0].tbody.tr.td[0].content;

            // Obtenim los partits de cada jornada
            var filterPartits = data.table[1].tbody.tr;
            
            filterPartits.forEach(function (data){
                data.num_jornada = numJornada;
                partitsAux.push(data)
            });
        });

        var PartitsCollection = Backbone.Collection.extend({
            model: Partit
        });

        partits = new PartitsCollection(partitsAux);

    });


});


