// Step 1: Declare a global variable age
let age = 25;

// Step 2: Create a function that logs the value of age
function displayAge() {
  console.log(`The current age is: ${age}`);
}

// Step 3: Create another function that changes the value of age
function changeAge(newAge) {
  age = newAge;  // Updates the global variable
  console.log(`Age after update: ${age}`);
}

// Step 4: Call functions to demonstrate execution context
displayAge();      // Output: The current age is: 25
changeAge(30);     // Output: Age after update: 30
displayAge();      // Output: The current age is: 30
