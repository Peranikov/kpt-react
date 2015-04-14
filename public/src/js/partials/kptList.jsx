var _ = require('lodash');
var KptStore = require('../stores/kpt');

var KptList = React.createClass({
  componentDidMount: function() {
    KptStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    KptStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.render;
  },
  render: function() {
    var keepList = _.map(KptStore.getGroup('keep'), function(kpt) {
      return <li>{kpt.comment}</li>
    });

    var problemList = _.map(KptStore.getGroup('problem'), function(kpt) {
      return <li>{kpt.comment}</li>
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
