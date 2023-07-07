

let myObject = {
    name: "Prosper",
    age: 25,
    occupation: "Developer",
    location: "Abuja"
  };
  
  console.log(myObject.name);// output: Prosper
  
  // Use bracket notation to access a specific property
  console.log(myObject["age"]);// output: 25
  
  // Modify the property value using assignment
  myObject.occupation = "Engineer";
  myObject["location"] = "San Francisco";
  
  // Log the object to the console to see the updated value
  console.log(myObject);
  
// {
//   name: 'Prosper',
//   age: 25,
//   occupation: 'Engineer',
//   location: 'San Francisco'
// }
