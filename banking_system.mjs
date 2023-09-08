import { BankAccount } from "./bank_account.mjs";
const Bank= new BankAccount();
console.log(Bank.deposit(1000))
console.log(Bank.withdraw(1000))
// Bank.withdraw(100);