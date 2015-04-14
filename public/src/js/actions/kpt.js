var Dispatcher = require('../dispatchers/app');

var kptAction = {
  add: function(comment, author) {
    Dispatcher.handleViewAction({
      actionType: 'add',
      comment: comment,
      author: author
    });
  }
};

module.exports = kptAction;
