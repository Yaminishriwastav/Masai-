// Closure-Based Counter Implementation
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Current count: ${count}`);
    },
    getCount: function () {
      console.log(`Current count: ${count}`);
    }
  };
}

// Example Usage:
const counter1 = createCounter();
counter1.increment();  // Current count: 1
counter1.increment();  // Current count: 2
counter1.decrement();  // Current count: 1

const counter2 = createCounter();
counter2.increment();  // Current count: 1
counter2.decrement();  // Current count: 0


// Bank Account Simulation
function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        transactionHistory.push(`Deposited: ${amount}`);
        console.log(`Deposited: ${amount}`);
      }
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance: function () {
      console.log(`Current balance: ${balance}`);
    },
    getTransactionHistory: function () {
      console.log("Transaction History:", transactionHistory);
    }
  };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500);       // Deposited: 500
account.withdraw(200);      // Withdrawn: 200
account.withdraw(400);      // Insufficient balance
account.checkBalance();     // Current balance: 300
account.getTransactionHistory();
