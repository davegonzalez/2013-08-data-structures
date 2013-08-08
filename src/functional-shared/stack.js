var makeStack = function() {
  var storage = {};
  var size = 0;
  var stack = {};

    var giveAccess = {

      push: function(value) {
        storage[size++] = value;
      },

      pop: function() {
        if (size) {
          var temp = storage[size - 1];
          delete storage[size - 1];
          size--;
          return temp;
        }
      },

      size: function() {
        return size;
    }
  };
return _.extend(makeStack, giveAccess);
};