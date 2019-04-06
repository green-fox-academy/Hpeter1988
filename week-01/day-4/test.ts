let size: number = 8;

for (let j: number = 0; j < size; j++) {
    let finalOut: string = ''
    for (let k: number = 0; k < size; k++) {
        if ((j + k) % 2 == 0) {
            finalOut += '%';
        }
        else {
            finalOut += ' ';
        }
    }
    console.log(finalOut)
}