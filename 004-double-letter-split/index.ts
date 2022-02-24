export function doubleLetterSplit(word) {
    
    word = word.toLowerCase();
    let splitted = [];
    let prevIn = 0;
    for (let i = 1; i < word.length; i++) {
        if (word[i-1] === word[i]) {
            splitted.push(word.slice(prevIn, i));
            prevIn = i;
        }
    }
    if (prevIn === 0) return [];
    else splitted.push(word.slice(prevIn));
    return splitted;
}

export function doubleLetterSplitRegEx(word) {
    
    // lol, vanskelig :/
    word = word.toLowerCase();
    let regEx = new RegExp(/(([a-z])\1)/);
    let splitted = word.split(regEx)

    if (word == splitted) return [];
    return splitted
}