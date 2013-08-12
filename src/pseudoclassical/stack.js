var Stack = function() {
	this._size = 0;
	this._storage = {};
};

Stack.prototype.push = function(value) {
  if (value) {
    this._storage[this._size++] = value;
  }
};

Stack.prototype.pop = function() {
  this._size && this._size--;
  return this._storage[this._size];
};

Stack.prototype.size = function() {
  return this._size;
};

var makeStack = new Stack();