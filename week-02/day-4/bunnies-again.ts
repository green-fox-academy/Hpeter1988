
function earCursion(bunnies: number): number {

    if (bunnies === 0) {
        return 0;
    }
    if (bunnies % 2 === 0) {
        return 3 + earCursion(bunnies - 1);
    }
    if (bunnies % 2 != 0) {
        return 2 + earCursion(bunnies - 1);
    }
}

console.log(earCursion(4))