import type { ICard } from "./interfaces/ICard.js";
import { CurrencyEnum } from "./CurrencyEnum.js";

export class Pocket {
  cards: Map<string, ICard> = new Map();

  addCard(name: string, card: ICard): void {
    this.cards.set(name, card);
  }
  removeCard(name: string): void {
    this.cards.delete(name);
  }
  getCard(name: string): ICard | undefined {
    return this.cards.get(name);
  }
  getTotalAmount(currency: CurrencyEnum): number {
    let totalBalance: number = 0;
    for (let card of this.cards.values()) {
      totalBalance = totalBalance + card.getBalance(currency);
    }
    return totalBalance;
  }
}
