var Partit = Backbone.Model.extend({
	defaults: {

		parellaLocal: "",
		parellaVisitant: "",
		parcial1: "",
		parcial2: "",
		parcial3: ""
	},
	initialize: function(){
		var setsAux = [];
		this.set("parellaLocal", this.attributes.td[0].a.content);



		// Condicions para setejar el nom de la parella visitant
		var that = this;
		this.attributes.td.forEach(function (data){
			if (data.class.indexOf('CompetidorVisitante') === 0){
				that.set("parellaVisitant", data.a.content);
			}
			if (data.class === "Parcial"){
				setsAux.push(data.content);
			}
		})

		this.set("parcial1", setsAux[0]);
		this.set("parcial2", setsAux[1]);
		this.set("parcial3", setsAux[2]);
		console.log(this);

	}
});