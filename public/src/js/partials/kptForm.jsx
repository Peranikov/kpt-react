var KptAction = require('../actions/kpt');

var KptForm = React.createClass({
  _onAdd: function() {
    var comment = document.getElementById("comment").value;
    var author = document.getElementById("author").value;
    var grouping = document.getElementById("grouping").value;
    KptAction.add(comment, author, grouping);
  },
  render: function() {
    return (
      <div>
        <div>
          <label>Comment:</label>
          <input id="comment" type="text" />
        </div>
        <div>
          <label>Author:</label>
          <input id="author" type="text" />
        </div>
        <div>
          <select id="grouping">
            <option value="keep">Keep</option>
            <option value="problem">Problem</option>
            <option value="try">Try</option>
          </select>
        </div>
        <button onClick={this._onAdd}>Add</button>
      </div>
    );
  }
});

module.exports = KptForm;
