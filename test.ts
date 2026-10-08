import { Card } from "./src/Card.js";
import { BonusCard } from "./src/BonusCard.js";
import { CurrencyEnum } from "./src/CurrencyEnum.js";
import { Transaction } from "./src/Transaction.js";
import { Pocket } from "./src/Pocket.js";

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

// ========================================
// NEW HOMEWORK
// BonusCard + Pocket
// ========================================

console.log("\n========================================");
console.log("NEW HOMEWORK");
console.log("========================================");

// ========================================
// BonusCard
// ========================================

console.log("\n--- BonusCard ---");

const bonusCardTest = new BonusCard();

console.log(
  "Add USD transaction with bonus:",
  bonusCardTest.addTransaction(CurrencyEnum.USD, 200),
);

console.log(
  "Add UAH transaction with bonus:",
  bonusCardTest.addTransaction(CurrencyEnum.UAH, 1000),
);

console.log(
  "BonusCard USD balance:",
  bonusCardTest.getBalance(CurrencyEnum.USD),
);

console.log(
  "BonusCard UAH balance:",
  bonusCardTest.getBalance(CurrencyEnum.UAH),
);

// ========================================
// Pocket
// ========================================

console.log("\n--- Pocket ---");

const pocketTest = new Pocket();

// addCard()
console.log("\n1. addCard()");

pocketTest.addCard("main", cardTest);
pocketTest.addCard("bonus", bonusCardTest);

console.log("Cards added to Pocket.");

// getCard()
console.log("\n2. getCard()");

console.log("Get main card:", pocketTest.getCard("main"));

console.log("Get bonus card:", pocketTest.getCard("bonus"));

console.log("Get unknown card:", pocketTest.getCard("unknown"));

// getTotalAmount()
console.log("\n3. getTotalAmount()");

console.log(
  "Total UAH in Pocket:",
  pocketTest.getTotalAmount(CurrencyEnum.UAH),
);

console.log(
  "Total USD in Pocket:",
  pocketTest.getTotalAmount(CurrencyEnum.USD),
);

// removeCard()
console.log("\n4. removeCard()");

console.log("Main card before removing:", pocketTest.getCard("main"));

pocketTest.removeCard("main");

console.log("Main card after removing:", pocketTest.getCard("main"));

console.log(
  "Total USD after removing main card:",
  pocketTest.getTotalAmount(CurrencyEnum.USD),
);

console.log(
  "Total UAH after removing main card:",
  pocketTest.getTotalAmount(CurrencyEnum.UAH),
);
