var _ = require('lodash');
var KptStore = require('../stores/kpt');
var KptLabel = require('../components/kptLabel');

var KptList = React.createClass({
  getInitialState: function() {
    return {
      keeps: KptStore.getGroup('keep'),
      problems: KptStore.getGroup('problem'),
      try: KptStore.getGroup('try'),
    }
  },
  componentDidMount: function() {
    KptStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    KptStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({
      keeps: KptStore.getGroup('keep'),
      problems: KptStore.getGroup('problem'),
      try: KptStore.getGroup('try'),
    });
  },
  render: function() {
    var keepList = _.map(this.state.keeps, function(keep) {
      return <KptLabel key={keep.id} comment={keep.comment} author={keep.author} />
    });

    var problemList = _.map(this.state.problems, function(problem) {
      return <li key={problem.id}>{problem.comment} - @{problem.author}</li>
    });
    return (
      <div>
        <h2>Keep</h2>
        <ul>
          {keepList}
        </ul>
        <h2>Problem</h2>
        <ul>
          {problemList}
        </ul>
        <h2>Try</h2>
      </div>
    );
  }
});

module.exports = KptList;
