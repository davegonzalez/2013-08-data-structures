var makeStack = function() {
  var storage = {};
  var size = 0;
  var stack = {};

  stack.push = function(value) {
    if (value) {
    storage[size++] = value;
    }
  };

  stack.pop = function() {
    if (size) {
      var temp = storage[size - 1];
      delete storage[size - 1];
      size--;
      return temp;
    }
  };

  stack.size = function() {
    return size;
  };

  return stack;
};
