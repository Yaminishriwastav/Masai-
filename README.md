 Closure Assignment Solutions
This repository contains implementations for two closure-based tasks:

1) Closure-Based Counter Implementation.
2) Bank Account Simulation with Private Variables.

# How Closures Work
Definition:
A closure is a function that "remembers" the variables from its surrounding lexical environment, even when the function is executed outside that environment.

Task 1: Counter Implementation
We used closures to keep the count variable private. When we call createCounter(), a new environment is created, and the inner functions have access to the private variable count.

Example:
javascript
Copy code
const counter1 = createCounter();  // Creates a new closure with its own 'count'
counter1.increment();  // Current count: 1
counter1.increment();  // Current count: 2

const counter2 = createCounter();  // New closure, separate from counter1
counter2.increment();  // Current count: 1

Task 2: Bank Account Simulation
We used closures to simulate private variables for balance and transactionHistory. These variables are not accessible from outside the function but can be updated through the returned methods.

Example:
javascript
Copy code
const account = createBankAccount();
account.deposit(500);       // Deposited: 500
account.withdraw(200);      // Withdrawn: 200
account.checkBalance();     // Current balance: 300
account.getTransactionHistory();  // Shows the transaction history
