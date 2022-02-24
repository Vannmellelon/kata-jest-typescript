export function elasticize(word:string) {

    let elasticizedWord:string = "";
    let elasticizedWordEnd:string[] = [];
    let middle:number = word.length/2;

    for (let i = 0; i <= middle; i++) {

        elasticizedWord += word[i].repeat(i+1);
        if (i+2 === middle) break; // WTF
        let tempIndex:number = word.length-(i+1);
        let tempStr:string = word[tempIndex].repeat(i+1);
        elasticizedWordEnd.push(tempStr);
    }

    return elasticizedWord + elasticizedWordEnd.reverse().join("");
}