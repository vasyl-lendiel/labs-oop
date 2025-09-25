import IPersonBehavior from "./persons/interfaces/person.interface";
import Italian from "./persons/italian";
import Person from "./persons/person";
import Ukrainian from "./persons/ukrainian";

async function main() {
    const marco: Italian = new Italian("Марко");
    const oksana: Ukrainian = new Ukrainian("Оксана");

    const people: Person[] = [marco, oksana];

    const behaviors: IPersonBehavior[] = [marco, oksana];

    console.log("=== Виклик через клас ===");
    marco.PrintCountryName();
    marco.Speak();

    console.log("\n=== Виклик через батьківський клас ===");
    for (const person of people) {
        person.PrintCountryName();
        person.Speak();
    }

    console.log("\n=== Виклик через інтерфейс ===");
    for (const obj of behaviors) {
        obj.PrintCountryName();
        obj.Speak();
    }
}

main().catch(console.error);
