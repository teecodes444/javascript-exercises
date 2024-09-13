const removeFromArray = function(arr, arg) {
   let newArray = [];
   
   for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === arg) {
        arr.slice(arr[i])
    } else {
        newArray.push(arr[i])
    }

   }

   return newArray

};

removeFromArray([1, 2, 3, 4], 2)


// CORRECT SOLUTION

/* const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  }; */

// Do not edit below this line
module.exports = removeFromArray;
