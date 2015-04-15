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
      tries: KptStore.getGroup('try'),
    });
  },
  render: function() {
    var keepList = _.map(this.state.keeps, function(kpt) {
      return <KptLabel key={kpt.id} comment={kpt.comment} author={kpt.author} />
    });

    var problemList = _.map(this.state.problems, function(kpt) {
      return <KptLabel key={kpt.id} comment={kpt.comment} author={kpt.author} />
    });

    var tryList = _.map(this.state.tries, function(kpt) {
      return <KptLabel key={kpt.id} comment={kpt.comment} author={kpt.author} />
    });
    return (
      <div>
        <h2>Keep</h2>
          {keepList}
        <h2>Problem</h2>
          {problemList}
        <h2>Try</h2>
          {tryList}
      </div>
    );
  }
});

module.exports = KptList;
