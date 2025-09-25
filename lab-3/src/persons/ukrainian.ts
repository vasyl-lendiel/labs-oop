import Person from "./person";

export default class Ukrainian extends Person {
  PrintCountryName(): void {
    console.log("Моя країна — Україна.");
  }

  Speak(): void {
    console.log("Я говорю українською мовою.");
  }
}