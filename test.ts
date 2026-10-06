import { Card } from "./src/Card.js";
import { CurrencyEnum } from "./src/CurrencyEnum.js";
import { Transaction } from "./src/Transaction.js";

const cardTest = new Card();
const transactionTest = new Transaction(CurrencyEnum.USD, 155);

console.log(cardTest.addTransaction(CurrencyEnum.UAH, 200));
console.log(cardTest.addTransaction(CurrencyEnum.UAH, 100));
console.log(cardTest.addTransaction(CurrencyEnum.UAH, 60));

console.log(cardTest.addTransaction(CurrencyEnum.USD, 400));
console.log(cardTest.addTransaction(transactionTest), " transactionTest");

const transactionId = cardTest.addTransaction(CurrencyEnum.USD, 100);

console.log(cardTest.getTransaction(transactionId));

console.log(cardTest.getBalance(CurrencyEnum.UAH));
console.log(cardTest.getBalance(CurrencyEnum.USD));
