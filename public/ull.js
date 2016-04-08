var parellesAux = [];
var partitsAux = [];
var parelles;
var jornades;
var partits;

var idLliga3ull = "193660";
var idLliga2ull = "193658";
var idLliga1ull = "193582";


$(document).ready(function () {

    $.getJSON('/db/ull/U193660R.json',function(data){

        // Objecte que conte unicament les parelles
        var filterData = data.query.results.table.tbody.tr.slice(1);

        // Iterem sobre cada parella i la pujem a un array
        filterData.forEach(function(data){
            var parella = data.td;
            parellesAux.push(parella)
        });

        var ParellesCollection = Backbone.Collection.extend({
            model: ParellaUll
        });

        parelles = new ParellesCollection(parellesAux);

        var parellaView = new ParellaView({el:$('#clasific'), collection: parelles})

    });


    $.getJSON('/db/ull/U193660P.json', function(data){

        console.log(data);
        // // Objecte en totes les jornades
        var jornadesData = data.query.results.div.div;
        

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
