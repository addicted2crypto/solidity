// Description: Enumerable Magic #20 - Cascading Subsets

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.



// My Solution =>

function eachCons(array, n) {
	let newArr = [];
  for(let i = 0; i < array.length; i++) {
    let secondArr = [];
    for(let k = 0; k < n; k++) {
      let ind = i + k;
      if(ind >= array.length) return newArr;
        secondArr.push(array[ind]);
    }
    newArr.push(secondArr);
  }
  return newArr;
}