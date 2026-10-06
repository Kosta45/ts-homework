import { v4 as uuid } from "uuid";
import { CurrencyEnum } from "./CurrencyEnum.js";

export class Transaction {
  id: string;
  currency: CurrencyEnum;
  amount: number;

  constructor(currency: CurrencyEnum, amount: number) {
    this.id = uuid();
    this.currency = currency;
    this.amount = amount;
  }
}
