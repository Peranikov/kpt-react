var _ = require('lodash');
var Dispatcher = require('../dispatchers/app');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var kptLists = [
  {
    id: 1,
    author: 'Peranikov',
    comment: 'よかったこと',
    grouping: 'keep'
  },
  {
    id: 2,
    author: 'Peranikov',
    comment: 'わるかったこと',
    grouping: 'problem'
  }
];

var kptStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getGroup: function(group) {
    return _.filter(kptLists, function(kpt) {
      return kpt.grouping == group;
    });
  },
  getAll: function() {
    return kptLists;
  },
  remove: function(id) {
    console.log(kptLists)

    _.remove(kptLists, function(kpt) {
      return kpt.id == id
    });

    console.log(kptLists)
  }
});

kptStore.dispatcherToken = Dispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {
    case 'add':
      // TODO: Storeのメソッドにする
      kptLists.push({
        id: kptLists.length,
        author: action.author,
        comment: action.comment,
        grouping: action.grouping
      });
      kptStore.emitChange();
      break;
    case 'remove':
      kptStore.remove(action.id);
      kptStore.emitChange();
      break;
    default:
      console.log("Not implemented action: " + action.actionType)
  }
});

module.exports = kptStore;
