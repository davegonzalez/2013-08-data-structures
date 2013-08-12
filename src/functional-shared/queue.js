var makeQueue = function() {
  var queue = _({}).extend(queueMethods);
  queue.storage = {};
  queue.head = 0;
  queue.tail = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (value) {
    this.storage[this.tail++] = value;
  }
};

queueMethods.dequeue = function() {
  if (this.size()) {
    var temp = this.storage[this.head];
    delete this.storage[this.head++];
    return temp;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};

  