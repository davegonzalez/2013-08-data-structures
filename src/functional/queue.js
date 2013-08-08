var makeQueue = function(){
  var storage = {};
  var queue = {};
  var head = 0;
  var tail = 0;

  queue.enqueue = function(value) {
    storage[tail++] = value;
  };

  queue.dequeue = function() {
    if (this.size()) {
      var temp = storage[head];
      delete storage[head++];
      return temp;
    }
  };

  queue.size = function() {
    return tail - head;
  };

  return queue;
};
