// Only for 4x4 :')
export function clockwiseCipher(text) {

    let square = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]; // 4x4
    let upperLeftCol = 0;
    let upperLeftRow = 0;
    let upperRightCol = 3;
    let upperRightRow = 0;
    let lowerRightCol = 3;
    let lowerRightRow = 3;
    let lowerLeftCol = 0;
    let lowerLeftRow = 3;
    let index = 0;

    for (let i = 0; i < 4;i ++) {
        square[upperLeftRow][upperLeftCol] = text[index] || " ";
        square[upperRightRow][upperRightCol] = text[index+1] || " ";
        square[lowerRightRow][lowerRightCol] = text[index+2] || " ";
        square[lowerLeftRow][lowerLeftCol] = text[index+3] || " ";

        index += 4;
        // edges
        if (i <= 1) {
            upperLeftCol += 1;
            upperRightRow += 1;
            lowerRightCol -= 1;
            lowerLeftRow -= 1;
            continue;
        }
        // move in
        if (i === 2) {
            upperLeftCol = 1;
            upperLeftRow = 1; 
            upperRightCol = 2; 
            upperRightRow = 1;
            lowerRightCol = 2; 
            lowerRightRow = 2;
            lowerLeftCol = 1;
            lowerLeftRow = 2;
            continue;
        }
    }

    console.table(square);
    let result = "";
    for (const s of square) {
        result += s.join("");
    }
    return result;
}