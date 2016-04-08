var ParellaVin = Backbone.Model.extend({
	defaults: {
		pos: "",
		nom : "",
		pj : "",
		pg : "",
		pp :"",
		jf : "",
		jc : "",
		sf : "",
		sc : "",
		ds : "",
		pts : "",

	},
	initialize : function () {
		this.set('pos', this.attributes[0].content); 
		this.set('nom', this.attributes[1].content); 
		this.set('pj', this.attributes[2].content); 
		this.set('pg', this.attributes[3].content); 
		this.set('pp', this.attributes[4].content); 
		this.set('jf', this.attributes[5].content);
		this.set('jc', this.attributes[6].content);
		this.set('sf', this.attributes[7].content);
		this.set('sc', this.attributes[8].content);
		this.set('ds', this.attributes[9].content);
		this.set('pts', this.attributes[10].content);
	}
});