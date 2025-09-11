const removeFromArray = function(arr, ...theArgs) {
    for (const arg of theArgs) {
        while (arr.includes(arg)) {
          let idx = arr.findIndex(item => item === arg);
            arr.splice(idx, 1);  
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
