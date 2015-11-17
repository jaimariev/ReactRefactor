var React = require('react');

var Edit = React.createClass({
	render:function(){
	<form id="detailForm">
		<input id="objectId" type="hidden" value={this.props.data.objectId} />
		<div class="form-group">
		<label for="title">Title</label>
		<input type="text" class="form-control" id="title" placeholder="Title"{{#title}} value="{{title}}"{{/title}}>
		</div>
		<div class="form-group">
		<label for="url">Image URL</label>
		<input type="text" class="form-control" id="url" placeholder="Image URL"{{#url}} value="{{url}}"{{/url}}>
		</div>
		<div class="form-group">
		<label for="description">Description</label>
		<textarea id="description" class="form-control" rows="3" placeholder="Description">{{#description}}{{description}}{{/description}}</textarea>
		</div>
		<button class="btn btn-default" type="submit">Submit</button>
	</form>
	}
})

module.exports =Edit;