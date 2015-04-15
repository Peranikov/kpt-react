var KptForm = require('./partials/kptForm');
var KptList = require('./partials/kptList');

var Page = React.createClass({
	render: function () {
		return (
			<div className="app">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-brand">KPT for React</div>
					</div>
				</nav>
				<KptForm />
				<KptList />
			</div>
		);
	}
});

React.render(<Page />, document.body);
