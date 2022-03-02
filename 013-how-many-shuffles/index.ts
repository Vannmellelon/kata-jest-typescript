export function countShuffles (num) {

    let unShuffled:number[] = [];
    for (let i = 1; i <= num; i++) {
        unShuffled.push(i);
    }

    // first shuffle
    const firstShuffle:number[] = faroShuffle([...unShuffled]);
    let shuffled:number[] = [...firstShuffle];

    //console.log("unshuffled", unShuffled);
    //console.log("first shuffle", firstShuffle);
    //console.log("shuffled", shuffled);

    
    let counter = 1;
    for (let i = 0; i <= num; i++) {
        shuffled = faroShuffle(shuffled);
        counter ++;
        //console.log("Counter: ", counter);
        //console.log("shuffled in loop", shuffled);
        //console.log("unshuffled", unShuffled);

        // best way to compare?? nice
        if (JSON.stringify(unShuffled) === JSON.stringify(shuffled)) {
            return counter;
        }
    }
    return counter;
}

export function faroShuffle (inpArray:number[]) {

    const half:number = inpArray.length/2;
    let lhs:number[] = inpArray.splice(0,half);
    //console.log("inp",inpArray);
    let rhs:number[] = [...inpArray];

    //console.log("lhs", lhs);
    //console.log("rhs", rhs);

    let shuffled:number[] = [];
    for (let i = 0; i < half; i++) {
        shuffled.push(lhs[i]);
        shuffled.push(rhs[i]);
        //console.log(shuffled);
    }
    return shuffled;
}