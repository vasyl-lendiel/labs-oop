
export default class Calculator {
    private INITVALUE: number;
    private FINALVALUE: number;
    private STEP: number;
    private twoDimensionalArray: number[][];

    constructor(initValue: number, finalValue: number, step: number) {
        this.INITVALUE = initValue;
        this.FINALVALUE = finalValue;
        this.STEP = step;
        this.twoDimensionalArray = this.fillTwoDimensionalArray();
    }

    private expression(x: number): number {
        return Math.exp(x) + Math.cos(x) - 2;
    }

    public tabulate(): Array<{ x: number; y: number }> {
        const result: Array<{ x: number; y: number }> = [];
        for (let x = this.INITVALUE; x <= this.FINALVALUE + 1e-9; x += this.STEP) {
            const y = this.expression(x);
            result.push({ x, y });
        }
        return result;
    }

    public minBelowDiagonal(): number {
        if (!this.twoDimensionalArray || this.twoDimensionalArray.length === 0) {
            throw new Error("Array is empty or not initialized");
        }

        let min = Infinity;

        for (let i = 1; i < this.twoDimensionalArray.length; i++) {
            const row = this.twoDimensionalArray[i];
            if (!row) continue;
            for (let j = 0; j < i; j++) {
                const value = row[j];
                if (value !== undefined && value < min) {
                    min = value;
                }
            }
        }

        return min;
    }

    private fillTwoDimensionalArray(): number[][] {
        return Array.from({ length: 10 }, () => {
            return Array.from({ length: 10 }, () => Math.random() * 100);
        });
    }
}