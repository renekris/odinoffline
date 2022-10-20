const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div,
    };
})();

console.log(calculator.mul(14, 5534)); // 77476
console.log(calculator.add(14, 5534));
console.log(calculator.div(14, 5534));
