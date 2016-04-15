var ParellaUll = Backbone.Model.extend({
	defaults: {
		pos: "",
		nom : "",
		pj : "",
		pg : "",
		pp :"",
		ds : "",
		dj : "",
		np : "",
		pts : "",

	},
	initialize : function () {
		this.set('pos', this.attributes[0].content); 
		var nomsRaw = this.attributes[1].content.split('-');
		var noms = nomsRaw[0] +'/'+ nomsRaw[nomsRaw.length-1];
		this.set('nom', noms); 
		this.set('pj', this.attributes[2].content); 
		this.set('pg', this.attributes[3].content); 
		this.set('pp', this.attributes[4].content); 
		this.set('ds', this.attributes[5].content);
		this.set('dj', this.attributes[6].content);
		this.set('np', this.attributes[7].content);
		this.set('pts', this.attributes[8].content);
	}
});