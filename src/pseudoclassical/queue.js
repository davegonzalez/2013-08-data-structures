var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  if (value) {
    this.storage[this.tail++] = value;
  }
};

Queue.prototype.dequeue = function() {
  if (this.size()) {
    var temp = this.storage[this.head];
    delete this.storage[this.head++];
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};
