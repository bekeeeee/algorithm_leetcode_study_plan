function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;
  let maxOfIsland = 0;
  let hash: { [key: string]: number } = {};
  let length = grid.length;
  let width = grid[0].length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] && !hash[`${i},${j}`]) {
        maxOfIsland = 0;
        hash[`${i},${j}`] = 1;
        maxOfIsland++;
        getMax(i, j);
        max = Math.max(max, maxOfIsland);
      }
    }
  }
  function getMax(x: number, y: number): void {
    // 0  1
    if (x - 1 >= 0 && !hash[`${x - 1},${y}`] && grid[x - 1][y]) {
      hash[`${x - 1},${y}`] = 1;
      maxOfIsland++;
      getMax(x - 1, y);
    }
    if (x + 1 < length && !hash[`${x + 1},${y}`] && grid[x + 1][y]) {
      // south
      hash[`${x + 1},${y}`] = 1;
      maxOfIsland++;
      getMax(x + 1, y);
    }

    if (y - 1 >= 0 && !hash[`${x},${y - 1}`] && grid[x][y - 1]) {
      // east
      hash[`${x},${y - 1}`] = 1;
      maxOfIsland++;
      getMax(x, y - 1);
    }
    if (y + 1 < width && !hash[`${x},${y + 1}`] && grid[x][y + 1]) {
      hash[`${x},${y + 1}`] = 1;
      maxOfIsland++;
      getMax(x, y + 1);
    }
  }
  return max;
}

console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));

/*
      1 1 1
  
      1 1 0
  
      1 0 1
  
  
  */
