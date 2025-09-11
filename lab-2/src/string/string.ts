
export default class StringUtils {
    private readonly baseStr: string[] = ['Національний лісотехнічний університет України', 'ННІ Комп’ютерних наук та інформаційних технологій', 'КНС11', `Комп'терні науки`];

    public getBaseStr(): string[] {
        return this.baseStr;
    }

    public removeSpecialityName(): string {
        const specialityName = this.baseStr.find(str => str.includes('Комп’ютерні науки') || str.includes(`Комп'терні науки`));
        if (specialityName) {
            this.baseStr.splice(this.baseStr.indexOf(specialityName), 1);
            return this.baseStr.join(', ');
        }
        throw new Error('Speciality name not found');
    }

    public reverseString(str: string): string {
        console.log('Reversed string array:', str.split(', ').reverse().join(', '));
        return str.split(', ').reverse().join(', ');
    }

    public compareUpperCase(str: string): string {
        const upper = str.toUpperCase();
        console.log('Original string:', str);
        console.log('Upper case string:', upper);

        const result = str.localeCompare(upper, 'uk', { sensitivity: 'base' });
        console.log('localeCompare result:', result === 0 ? 'Equivalent' : 'Not equivalent');

        return upper;
    }

    public printUniversityName(str: string): void {
        const array = str.split(', ');
        const universityName = array.find(str => str.includes('університет'));
        if (universityName) {
            console.log('University name:', universityName);
        } else {
            throw new Error('University name not found');
        }
    }

    public concatenateStrings(str1: string, str2: string): string {
        return `${str1} ${str2}`;
    }

    public findFirstAndLastIndex(string: string, letter: string): void {
            const first = string.indexOf(letter);
            const last = string.lastIndexOf(letter);

            console.log(`Row 1: "${string}"`);
            if (first !== -1) {
                console.log(`First occurrence of "${letter}": ${first}`);
                console.log(`Last occurrence of "${letter}": ${last}`);
            } else {
                console.log(`Letter "${letter}" is not found in the string`);
            }
    }
}