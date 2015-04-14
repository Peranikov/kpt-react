var Header = require('./partials/header');
var KptForm = require('./partials/kptForm');
var KptList = require('./partials/kptList');

var Page = React.createClass({
	render: function () {
		return (
			<div className="app">
				<KptForm />
				<KptList />
			</div>
		);
	}
});

React.render(<Page />, document.body);
