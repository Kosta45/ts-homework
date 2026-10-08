import { Card } from "./Card.js";
import { CurrencyEnum } from "./CurrencyEnum.js";
import { Transaction } from "./Transaction.js";

export class BonusCard extends Card {
  addTransaction(value: Transaction | CurrencyEnum, amount?: number): string {
    if (value instanceof Transaction) {
      this.transactions.push(value);
      const bonusTransaction = new Transaction(
        value.currency,
        value.amount * 0.1,
      );
      this.transactions.push(bonusTransaction);
      return `TRANSACTION: ${value.id}, BONUS TRANSACTION: ${bonusTransaction.id}`;
    } else if (amount === undefined) {
      throw new Error("Amount is required");
    } else {
      const transaction = new Transaction(value, amount);
      const bonusTransaction = new Transaction(value, amount * 0.1);
      this.transactions.push(transaction);
      this.transactions.push(bonusTransaction);
      return `TRANSACTION: ${transaction.id}, BONUS TRANSACTION: ${bonusTransaction.id}`;
    }
  }
}
