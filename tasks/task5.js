

// Merge objects
// Create multiple objects with different properties.
// Use the Object.assign() method to merge the objects into a single object.
// Log the merged object to the console.

let obj1 = { name: "Promise" };
let obj2 = { age: 25 };
let obj3 = { occupation: "Developer" };

let mergedObjects = Object.assign({}, obj1, obj2, obj3);

// Log the merged object to the console
console.log(mergedObjects);

//OUTPUT

// { name: 'Promise', age: 25, occupation: 'Developer' }
