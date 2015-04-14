var KptAction = require('../actions/kpt');

var KptForm = React.createClass({
  _onAdd: function() {
    KptAction.add('comment', 'author')
  },
  render: function() {
    return (
      <div>
        <label>Comment</label>
        <p><input type="text" /></p>
        <button onClick={this._onAdd}>Add</button>
      </div>
    );
  }
});

module.exports = KptForm;
