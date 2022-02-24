export function maximumProfit(inpArray) {
    let profit = 0;
    for (let i = 0; i <= inpArray.length; i++) {
        let price1 = inpArray[i];
        for (let j = i; j <= inpArray.length; j++) {
            let price2 = inpArray[j];
            if (price1 < price2 && price2 - price1 > profit) {
                profit = price2 - price1;
            }   
        }
    }
    return profit;
}