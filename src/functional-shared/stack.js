var makeStack = function() {
  var stack = _({}).extend(stackMethods);
  stack._size = 0;
  stack._storage = {};

  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  if (value) {
    this._storage[this._size++] = value;
  }
};

stackMethods.pop = function() {
  this._size && this._size--;
  return this._storage[this._size];
};

stackMethods.size = function() {
  return this._size;
};