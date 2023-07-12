function numberOfSteps(num) {
    let steps = 0;

    while (num > 0) {
        num = num % 2 === 0 ? num / 2 : num - 1;
        steps++;
    }
    return steps;
}

console.log(numberOfSteps(123));
