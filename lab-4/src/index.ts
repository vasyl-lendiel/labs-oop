import Italian from "./persons/italian";
import Person from "./persons/person";
import Ukrainian from "./persons/ukrainian";

async function main() {
    const people: Person[] = [
        new Italian("Марко"),
        new Ukrainian("Оксана"),
        new Italian("Джузеппе"),
    ];

    for (const person of people) {
        person.PrintCountryName();
        person.Speak();
        console.log("---------------");
    }

    people[1]?.setLanguage("Англійська");
    people[1]?.Speak();

    console.log(`Створено італійців: ${Italian.count}`);

    if (people[0] && people[1]) {
        console.log(
            `Чи ${people[0].name} і ${people[1].name} з однієї країни? ->`,
            people[0].isSameCountry(people[1])
        );
    } else {
        console.log("Недостатньо даних для порівняння першої і другої особи.");
    }

    if (people[0] && people[2]) {
        console.log(
            `Чи ${people[0].name} і ${people[2].name} з однієї країни? ->`,
            people[0].isSameCountry(people[2])
        );
    } else {
        console.log("Недостатньо даних для порівняння першої і третьої особи.");
    }
}

main().catch(console.error);
