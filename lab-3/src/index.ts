import Italian from "./persons/italian";
import Person from "./persons/person";
import Ukrainian from "./persons/ukrainian";

async function main() {
    const people: Person[] = [new Italian(), new Ukrainian()];

    for (const person of people) {
        person.PrintCountryName();
        person.Speak();
        console.log("---------------");
    }
}

main().catch(console.error);
