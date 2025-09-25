import Person from "./person";

export default class Italian extends Person {
  PrintCountryName(): void {
    console.log("Моя країна — Італія.");
  }

  Speak(): void {
    console.log("Я говорю італійською мовою.");
  }
}