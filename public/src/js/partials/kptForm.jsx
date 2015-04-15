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
        <form>
          <div className="form-group">
            <label for="comment">Comment</label>
            <input className="form-control" id="comment" type="text" />
          </div>
          <div className="form-group">
            <label for="author">Author</label>
            <input className="form-control" id="author" type="text" />
          </div>
          <div className="form-group">
            <label for="grouping">Group</label>
            <select className="form-control" id="grouping">
              <option value="keep">Keep</option>
              <option value="problem">Problem</option>
              <option value="try">Try</option>
            </select>
          </div>
          <button type="button" className="btn btn-default" onClick={this._onAdd}>Add</button>
        </form>
      </div>
    );
  }
});

module.exports = KptForm;
