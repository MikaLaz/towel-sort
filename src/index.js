
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix === null || matrix === []) {
        return [];
    } else {
    let arrOut = [];
for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
        matrix[i] = matrix[i].reverse();
    } ;
    for (let j = 0; j < matrix[i].length; j++) {
        arrOut.push(matrix[i][j]);
    }
}
return arrOut;
}

}
  
 
