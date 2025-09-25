import Person from "./person";

export default class Ukrainian extends Person {
  constructor(name: string, language: string = "Українська") {
    super(name, "Україна", language);
  }

  PrintCountryName(): void {
    console.log(`${this.name}: Моя країна — ${this.country}.`);
  }

  Speak(): void {
    console.log(`${this.name}: Я говорю ${this.getLanguage()} мовою.`);
  }
}