function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  let length = image.length;
  let width = image[0].length;
  const preColor = image[sr][sc];
  let max: number = 0;
  if (preColor === color) return image;
  image[sr][sc] = color;
  max = 1;
  fill(sr, sc);

  function fill(x: number, y: number): void {
    // 0  1
    if (x - 1 >= 0 && image[x - 1][y] === preColor) {
      image[x - 1][y] = color;
      max++;
      fill(x - 1, y);
    }
    if (x + 1 < length && image[x + 1][y] === preColor) {
      // south

      image[x + 1][y] = color;
      max++;
      fill(x + 1, y);
    }

    if (y - 1 >= 0 && image[x][y - 1] === preColor) {
      // east
      image[x][y - 1] = color;
      max++;
      fill(x, y - 1);
    }
    if (y + 1 < width && image[x][y + 1] === preColor) {
      image[x][y + 1] = color;
      max++;
      fill(x, y + 1);
    }
  }
  console.log("max: " + max);
  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

/*
    1 1 1

    1 1 0

    1 0 1


*/
