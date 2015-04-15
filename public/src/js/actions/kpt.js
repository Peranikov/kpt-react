var Dispatcher = require('../dispatchers/app');

var kptAction = {
  add: function(comment, author, grouping) {
    Dispatcher.handleViewAction({
      actionType: 'add',
      comment: comment,
      author: author,
      grouping: grouping
    });
  }
};

module.exports = kptAction;
