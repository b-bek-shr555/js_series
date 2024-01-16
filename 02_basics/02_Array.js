const hashiras = ["Shinobu" , "Giyu" , "Sanemi" , "Obanai" , "Mitsuri"];
const lower_slayers = ["Tanjiro" , "Kanao" , "Zenistu" , "Inosuke"];

// ********* Merging The Array by push  ************ //
// hashiras.push(lower_slayers);
// console.log(hashiras[5][0]);

//  const all_slayers = hashiras.concat(lower_slayers)
// console.log(all_slayers);

//  Spread operator which is used to merge the array elements of many arrays //
// const demon_slayers = [...hashiras, ...lower_slayers];
// console.log(demon_slayers);

// The array which have been merged with eachother will be in single array  by Flat Function // 
// const num = [1,23,45,[3,45,45,] , 4, [23,34,656,23,[23,3,4]],323,32];
// const another_num = num.flat(Infinity);
// console.log(another_num);



// *************** Array Funciton  Array.isArray/from/of************************ //

console.log(Array.isArray([2,3])); // checking wheteher it is array is or not //
console.log(Array.from("Bibek Shrestha")); // Making the array by using from function while value is in string
console.log(Array.from("Bibek Shrestha").length);
console.log(Array.from({name : "Bibek"})); // intresting  = array adding object in array //

let name1 = "Bibek";
let name2 = "Binda";
let name3 = "Bishwash";
console.log(Array.of(name1,name2,name3)); // Array of function which will combine the variables or obejct into single array //


