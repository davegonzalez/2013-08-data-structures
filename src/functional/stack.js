var makeStack = function() {
  var storage = {},
    size = 0,
    stack = {};

  stack.push = function(value) {
    storage[size++] = value;
  };

  stack.pop = function() {
    if (size) {
      size--;
      return storage[size];
    }
  };

  stack.size = function() {
    return size;
  };

  return stack;
};
