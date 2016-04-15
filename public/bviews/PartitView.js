var PartitView = Backbone.View.extend(
	{
		template: _.template($('#partit_tmpl').html()),
		initialize: function(){
			this.render()
		},
		render: function(eventName){
			var el = $(this.el);
	        this.collection.each(function (model){
	            var template = _.template($('#partit_tmpl').html());
	            var html = template(model.toJSON());
	            el.append(html);
	        });
			return this;
		}
	}
);