export function points(twoPts: number, threePts: number) {
    const errorMsg = "TwoPointer is undefined";
    if (!twoPts) {throw new Error(errorMsg)}
    return 2*twoPts + 3*threePts;
}