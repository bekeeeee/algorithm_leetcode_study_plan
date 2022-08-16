import { QueueTs } from "../quee";

function orangesRotting(grid: number[][]): number {
  enum OrangeStatus {
    EMPTY = 0,
    FRESH = 1,
    ROTTEN = 2,
  }
  let minute: number = 0;
  let rottenQueue: QueueTs<[number, number]> = new QueueTs<[number, number]>();

  let length: number = grid.length;
  let width: number = grid[0].length;
  let rottenNumberPerMin: number;
  let currentPos: [number, number];
  let currX;
  let currY;
  let numberOfFreshOrange: number = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === OrangeStatus.ROTTEN) {
        rottenQueue.enqueue([i, j]);
      } else if (grid[i][j] === OrangeStatus.FRESH) {
        numberOfFreshOrange++;
      }
    }
  }
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ] as const;
  if (!numberOfFreshOrange) return minute;
  while (rottenQueue.size > 0) {
    rottenNumberPerMin = rottenQueue.size;

    for (let z = 0; z < rottenNumberPerMin; z++) {
      currentPos = rottenQueue.dequeue()!;
      currX = currentPos[0];
      currY = currentPos[1];
      for (let dir of dirs) {
        let x = currX + dir[0];
        let y = currY + dir[1];
        if (
          x < 0 ||
          x > length - 1 ||
          y < 0 ||
          y > width - 1 ||
          grid[x][y] != 1
        )
          continue;
        rottenQueue.enqueue([x, y]);
        grid[x][y] = 2;

        numberOfFreshOrange--;
        if (!numberOfFreshOrange) return ++minute;
      }
    }

    minute++;
  }

  return -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
