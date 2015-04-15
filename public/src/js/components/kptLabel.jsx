var KptLabel = React.createClass({
  propTypes: {
    comment: React.PropTypes.string.isRequired,
    author:  React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="col-md-2">
        <div className="thumbnail" style={{background: "#9F9"}}>
          <div className="caption">
            <h3>{this.props.comment}</h3>
            <span>@{this.props.author}</span>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = KptLabel;
