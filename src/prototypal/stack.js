var Stack = function() {
  var makeStack = Object.create(Stack.prototype);
  this.size = 0;
  this.storage = {};
  return makeStack;
};
  Stack.prototype = {};

  Stack.prototype.push = function(value) {
    storage[size++] = value;
  };

  Stack.prototype.pop = function() {
    if(size) {
      var temp = storage[size - 1];
      delete storage[size - 1];
      size--;
      return temp;
    }
  };

  Stack.prototype.size = function() {
    return size;
  };

