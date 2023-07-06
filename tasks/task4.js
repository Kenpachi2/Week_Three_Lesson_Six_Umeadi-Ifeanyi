

let myObject = {
    name: "Prosper",
    age: 25,
    occupation: "Developer",
    location: "Abuja"
  };
  
  delete myObject.age;
  
  console.log(myObject);
  
//OUTPUT
// { name: 'Prosper', occupation: 'Developer', location: 'Abuja' }
