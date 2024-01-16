/*
Array:-
The Collection of Datatype which holds multiple Datatypes in a Single Variable. 
like : string,number,Boolean,etc.
Syntax:let arr = [10,"Hello",true];




 --------------------------- Functions / Methods inside Array :- -------------------------------------
1)push() - Add element at the end of array.
2)pop() - Remove last element from an array and return that value.
3)shift() - Removes first element from an array and returns it.
4)unshift() - Add element to beginning of array.
5)concat(arr1,arr2) - It is used to merge two or more arrays.
6)reverse() - Reverse order of elements in an array.
7)sort([func])- Sorting array . If no function provided then by default it will
convert each element of array into String & then sort them.
8)splice(index,howmany,item1,.....,itemX) - De
9)indexOf/lastIndexOf(searchElement[,fromIndex]) - Returns the first(/last
occurrence of a specified search value within an array using strict equality for comparisons,
and returns the index of the found element.If not found it returns -1.
10)forEach(callbackfn[,thisArg]) - executes a provided function once per array element
11)map(callbackfn[, thisArg]) - creates a new array with the results of
calling a provided function on every element in the calling array.
*/

// ------------------------------------- Methods in Js Array --------------------------------

const myarr = new Array(1,2,3,4,5,6);
const my_name = ["Bibek Shrestha"];
// console.log("Original Array : ",myarr);

// myarr.push(7);
// myarr.push(8);
// myarr.pop();
// myarr.unshift(0);
// myarr.shift();
// console.log(myarr);
// console.log(myarr.includes(3));
// console.log(myarr.indexOf(3)); // Finds the value in which index //
// console.log(myarr.join()); // It Bends the Elements and makes the elements to a String //

// console.log(myarr.toString()); // It also converts all the elements to string //
// console.log(myarr.toLocaleString());


// let arr1 = [1, 2];
// let arr2 = ['A', 'B'];
// console.log(arr1.concat(arr2)); // Merging Two Arrays //

// [1, 2, 3].forEach((value) => {
//     console.log(`Value: ${value}`);
//     });  // Foreach //


// --------------------------------- slice & Splice -------------------------------------------------


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(3, 5));





const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
console.log(months.reverse());
// Reveresed the array //



