import { Transaction } from "./Transaction.js";
import { CurrencyEnum } from "./CurrencyEnum.js";

export class Card {
  transactions: Transaction[] = [];

  addTransaction(transaction: Transaction): string;

  addTransaction(currency: CurrencyEnum, amount: number): string;

  addTransaction(value: Transaction | CurrencyEnum, amount?: number): string {
    if (value instanceof Transaction) {
      this.transactions.push(value);
      return value.id;
    } else if (amount === undefined) {
      throw new Error("Amount is required");
    } else {
      const transaction = new Transaction(value, amount);
      this.transactions.push(transaction);
      return transaction.id;
    }
  }

  getTransaction(transactionId: string): Transaction | undefined {
    return this.transactions.find(
      (transaction) => transaction.id === transactionId,
    );
  }

  getBalance(currency: CurrencyEnum) {
    return this.transactions.reduce((sum, transaction) => {
      if (transaction.currency === currency) {
        sum = sum + transaction.amount;
      }

      return sum;
    }, 0);
  }
}
