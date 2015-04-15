var KptLabel = React.createClass({
  propTypes: {
    comment: React.PropTypes.string.isRequired,
    author:  React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        <span>{this.props.comment}</span>-<span>@{this.props.author}</span>
      </div>
    )
  }
});

module.exports = KptLabel;
