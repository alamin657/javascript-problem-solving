
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'please provide valid numbers';
    }
    let multiply = number * 3;
    let add = multiply + 10;
    let divide = add / 2;
    const totalResult = divide - 5;
    return totalResult;
}
const output = mindGame('alamin');
console.log(output);