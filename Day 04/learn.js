// label in Loops (Jumping Multiple Levels
// Can break or continue specific loops.

outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break outerLoop;
        console.log(i, j);
    }
}
