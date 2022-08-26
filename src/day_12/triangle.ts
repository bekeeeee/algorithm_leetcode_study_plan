function minimumTotal(triangle: number[][]): number {
  let table: number[][] = [];
  for (let row of triangle) table.push(new Array(row.length).fill(0));
  table[0] = triangle[0];

  for (let row = 1; row < triangle.length; row++) {
    for (let col = 0; col < triangle[row].length; col++) {
      if (col === 0) {
        table[row][col] = table[row - 1][col] + triangle[row][col];
      } else if (col === triangle[row].length - 1) {
        table[row][col] =
          table[row - 1][table[row - 1].length - 1] + triangle[row][col];
      } else {
        table[row][col] =
          Math.min(table[row - 1][col], table[row - 1][col - 1]) +
          triangle[row][col];
      }
    }
  }
  return Math.min(...table[table.length - 1]);
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

/*

                2
            5       6
        11      10      13
    15      

                                           2              2
                                          3 4           5   6
                                         6 5 7        11  10 13
                                        4 1 8 3     15  11  18  16 


*/
