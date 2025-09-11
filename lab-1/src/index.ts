import Calculator from "@/calculate/calculate";


async function main() {
    const calculator = new Calculator(-2, 2, 0.5);
    const result = calculator.tabulate();
    const minValue = calculator.minBelowDiagonal();
    console.table(result);
    console.log("Minimum value below the main diagonal:", minValue);
}

main().catch(console.error);