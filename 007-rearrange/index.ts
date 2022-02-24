export function rearrangeSentence(sentence:string) {
    
    const words = sentence.split(" ");
    let rearranged:string[] = [];

    for (let i = 1; i <= words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j].includes(i.toString(), 0)) {
                const noNumber = words[j].replace(/[0-9]/, "");
                rearranged = rearranged.concat(noNumber);
                break;
            }
        }
    }
    
    return rearranged.join(" ");
}