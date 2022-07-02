/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: (i: number) => number) {
  return function (n: number): number {
    for (let i = 1; i <= n; i++) {
      if (isBadVersion(i)) return i;
    }
    return -1;
  };
};
