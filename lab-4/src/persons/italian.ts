import Person from "./person";

export default class Italian extends Person {
  public static count: number = 0;

  constructor(name: string, language: string = "Італійська") {
    super(name, "Італія", language);
    Italian.count++;
  }

  PrintCountryName(): void {
    console.log(`${this.name}: Моя країна — ${this.country}.`);
  }

  Speak(): void {
    console.log(`${this.name}: Я говорю ${this.getLanguage()} мовою.`);
  }
}