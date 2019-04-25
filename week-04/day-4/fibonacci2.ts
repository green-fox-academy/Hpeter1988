export function fibbo(indexOfFib: number): number {

  if (indexOfFib === 2) {
      return 1;
  }
  else if (indexOfFib <= 1) {
      return 0;
  }
  return fibbo(indexOfFib - 1) + fibbo(indexOfFib - 2);
}