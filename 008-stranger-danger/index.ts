export function strangerDanger(inp:string) {
    
    inp = inp.replace(/[\.\,]/,"");
    const splitted:string[] = inp.split(" ");
    let aquantainces:string[] = [];
    let friends:string[] = [];

    interface WordCounts {
        word:string;
        seen:number;
    }

    let counts:WordCounts[] = []

    for (const w of splitted) {
        let lowerW = w.toLowerCase();

        for (const c of counts.entries()) {
            // seen the word beofre, seen++
            if (c[1].word === lowerW) {
                c[1].seen += 1;
                // if word has been seen 3 or four times and is not in aquaintainces, add
                if (c[1].seen >= 3 && !aquantainces.includes(c[1].word)) {
                    aquantainces.push(c[1].word);
                    continue;
                }
                // seen more than 5 times, remove from aquaintainces and add to friends
                else if (c[1].seen >= 5) {
                    const index = aquantainces.findIndex((e) => {return (e === c[1].word)});
                    const _newFriend = aquantainces.splice(index, 1);
                    friends.push(_newFriend.join(""));
                    continue;
                }
            }
        }          
        // not seen before, add to counts
        counts.push({word:lowerW, seen:1});
    }

    return [aquantainces, friends];
}

// From Dewald solution
/*
// ternary operator
// in a reduce
// changes word:number to word:number+1 in object if it exists
// if word undefined, adds word:1 to object
// bacsically dictionary, men ikke helt
acc[word] = acc[word] + 1 || 1;
*/