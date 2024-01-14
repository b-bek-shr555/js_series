/////////////////////////////////////  Stack & Heap  ////////////////////////////////////

// stack = Primitive; 
// Heap = Non-Primitive;

// Definition : 1
// In JavaScript, the primitive data types are String, Number and Boolean while non-primitive
// or compound data types are Objects.
// Objects are stored on the heap whereas other data types like string, number etc.,
// are stored on the stack.

// Definition : 2 // 
//  So if we change any property of one object then it reflects in all places where this object has been referenced.
// But when we assign a primitive type to another variable,
//  it just copies the value so changes made in one place do not affect others.

let full_name = "Bibek Shrestha";
console.log(full_name);

let another_name = full_name;
another_name = "Ramit Shrestha";
console.log(another_name);
console.log(full_name);
/* Output:
Bibek Shrestha
Ramit Shrestha
Bibek Shrestha */




// But In Non-primitive Data Types (Objects)
let person1 = { name: "John" };
let person2 = person1;
person2.name = "Jane";
console.log(person1.name); // Output : Jane
console.log(person2.name); // Output : Jane
// Here both person1 and person2 points to the Different Memory Locations
// If We Change Any Property Of Person1 Then It Doesn’t Affect Person2 Because
// They Are Pointing To Different Memory Locations.

// // So if we change person2 property of object then it reflects 
//  in all places where person2 object has been referenced.





