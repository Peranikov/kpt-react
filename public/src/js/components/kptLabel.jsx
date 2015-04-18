var KptAction = require('../actions/kpt');

var KptLabel = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    comment: React.PropTypes.string.isRequired,
    author:  React.PropTypes.string.isRequired
  },
  _onRemove: function() {
    KptAction.remove(this.props.id);
  },
  render: function() {
    return (
      <div className="col-md-2">
        <div className="thumbnail" style={{background: "#9F9"}}>
          <div className="caption">
            <div className="remove-button pull-right" onClick={this._onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
            <h3>{this.props.comment}</h3>
            <span>@{this.props.author}</span>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = KptLabel;
