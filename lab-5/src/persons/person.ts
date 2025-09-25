import IPersonBehavior from "./interfaces/person.interface";

export default abstract class Person implements IPersonBehavior {

  public name: string;
  protected country: string;
  private language: string;

  constructor(name: string, country: string, language: string) {
    this.name = name;
    this.country = country;
    this.language = language;
  }

  abstract PrintCountryName(): void;
  abstract Speak(): void;

  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(lang: string): void {
    this.language = lang;
  }

  public isSameCountry(other: Person): boolean {
    return this.country === other.country;
  }
}