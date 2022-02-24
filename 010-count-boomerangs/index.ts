// count boomerangs in a an array of numbers
// boomerang: sub-array of len=3, first and last digit the same, middle is different
export function countBoomerangs(inpArray:number[]) {

    let nBomerangs:number = 0;

    for (let i = 0; i < inpArray.length-2; i++) {
        const _substring:number[] = inpArray.slice(i,i+3);

        if (_substring[0] === _substring[2] && _substring[1] !== _substring[0] ) {
            nBomerangs += 1;
        }
    }
    return nBomerangs;
}