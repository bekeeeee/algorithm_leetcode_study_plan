import { QueueTs } from "../quee";

function updateMatrix(mat: number[][]): number[][] {
  if (mat.length == 0) return mat;

  let length: number = mat.length;
  let width: number = mat[0].length;
  let queue: QueueTs<[number, number]> = new QueueTs<[number, number]>();
  let visited: { [key: string]: boolean } = {};

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      if (mat[i][j] == 0) {
        queue.enqueue([i, j]);
        visited[`${i},${j}`] = true;
      }
    }
  }
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ] as const;
  while (queue.size > 0) {
    for (let i = 0; i < queue.size; i++) {
      let currentPos: [number, number] = queue.dequeue()!;
      let currX = currentPos[0];
      let currY = currentPos[1];

      for (let dir of dirs) {
        let x = currX + dir[0];
        let y = currY + dir[1];
        if (
          x < 0 ||
          x > length - 1 ||
          y < 0 ||
          y > width - 1 ||
          visited[`${x},${y}`]
        )
          continue;
        mat[x][y] = mat[currX][currY] + 1;
        queue.enqueue([x, y]);
        visited[`${x},${y}`] = true;
      }
    }
  }
  return mat;
}

console.log(
  JSON.stringify(
    updateMatrix([
      [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      // [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
    ])
  )
);

/*
         0  1  0
         0  1  0
         1  1  1
*/
