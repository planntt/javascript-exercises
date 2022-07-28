const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        if (arr.indexOf(arg) >= 0) {
            arr.splice(arr.indexOf(arg), 1);
        }
      }
      return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
