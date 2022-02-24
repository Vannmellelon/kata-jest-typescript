export function moveLetters(word) {
    
    let regCapital = new RegExp (/[A-Z]/);
    let splitted = word.match(regCapital);

    if (word == splitted) return [];
    return splitted
}