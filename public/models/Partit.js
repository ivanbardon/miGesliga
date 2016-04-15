var Partit = Backbone.Model.extend({
	defaults: {

		parellaLocal: "",
		parellaVisitant: "",
		parA1:"",
		parA2:"",
		parA3:"",
		parB1:"",
		parB2:"",
		parB3:"",
		set1: "",
		set2: "",
		set3: ""
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

		this.set("set1", setsAux[0]);
		this.set("set2", setsAux[1]);
		this.set("parA1",setsAux[0].split('-')[0]);
		this.set("parA2",setsAux[1].split('-')[0]);
		this.set("parB1",setsAux[0].split('-')[1]);
		this.set("parB2",setsAux[1].split('-')[1]);
		if(setsAux[2]){
			this.set("set3", setsAux[2]);
			this.set("parA3",setsAux[2].split('-')[0]);
			this.set("parB3",setsAux[2].split('-')[1]);
		};
		console.log(this);

	}
});