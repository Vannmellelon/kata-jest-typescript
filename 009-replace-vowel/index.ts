export function replaceVowel(inpString) {
    
    inpString = inpString.toLowerCase();
    inpString = inpString.replace(/a/g, "1");
    inpString = inpString.replace(/e/g, "2");
    inpString = inpString.replace(/i/g, "3");
    inpString = inpString.replace(/o/g, "4");
    inpString = inpString.replace(/u/g, "5");
    return inpString;
}