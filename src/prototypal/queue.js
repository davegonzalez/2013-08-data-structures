var Queue = function() {
  var makeQueue = Object.create(Queue.prototype);
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  return makeQueue;
};
  Queue.prototype = {};

  Queue.prototype.enqueue = function(value) {
    storage[tail++] = value;
  };

  Queue.prototype.dequeue = function() {
    if (this.size()) {
      var temp = storage[head];
      delete storage[head++];
      return temp;
    }
  };

  Queue.prototype.size = function() {
    return tail - head;
  };
