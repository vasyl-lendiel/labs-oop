import StringUtils from "@/string/string";
import StringBuffer from "@/string/string-buffer";


async function main() {
    const stringUtils = new StringUtils();
    const string = stringUtils.removeSpecialityName();
    console.log('String after removing speciality name:', string);
    const string2 = stringUtils.reverseString(string);
    const string3 = stringUtils.compareUpperCase(string);
    const string4 = stringUtils.concatenateStrings(string, string3);
    console.log('Concatenated string:', string4);
    stringUtils.printUniversityName(string);
    stringUtils.findFirstAndLastIndex(string, 'Н');

    const stringBuffer = new StringBuffer('Лендєл Василь Сергійович 05 02 2006');
    stringBuffer.delete(stringBuffer.toString().indexOf("05 02"), stringBuffer.toString().indexOf("2006"));
    console.log('Removing day and month from date of birth:', stringBuffer.toString());
    stringBuffer.append(" Мукачево");
    console.log('Appending city of birth:', stringBuffer.toString());
    let pos = stringBuffer.toString().indexOf("2006") + "2006".length;
    stringBuffer.insert(pos, " Чоловіча");
    console.log('Inserting gender:', stringBuffer.toString());
    console.log("Length in characters:", stringBuffer.length());
    console.log("Length in bytes (UTF-8):", stringBuffer.byteLength());

}

main().catch(console.error);