import { Transaction } from "../Transaction.js";
import { CurrencyEnum } from "../CurrencyEnum.js";

export interface ICard {
  addTransaction(transaction: Transaction): string;

  addTransaction(currency: CurrencyEnum, amount: number): string;

  getTransaction(transactionId: string): Transaction | undefined;

  getBalance(currency: CurrencyEnum): number;
}
