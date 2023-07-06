
let myObject = {
    name: "Moriaty",
    age: 30,
    occupation: "Criminal consultant",
    location: "New York"
  };
  
  for (let property in myObject) {
    
    console.log(property + ": " + myObject[property]);
  }
  
//OUTPUT
// name: Moriaty
// age: 30
// occupation: Criminal consultant
// location: New York
