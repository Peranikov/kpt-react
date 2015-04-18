var Dispatcher = require('../dispatchers/app');

var kptAction = {
  add: function(comment, author, grouping) {
    Dispatcher.handleViewAction({
      actionType: 'add',
      comment: comment,
      author: author,
      grouping: grouping
    });
  },
  remove: function(id) {
    Dispatcher.handleViewAction({
      actionType: 'remove',
      id: id
    });
  }
};

module.exports = kptAction;
