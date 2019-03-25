// 1. Napisz funkcję która liczy średnią arytmetyczną przekazanych do niej liczb jako tablicy.

function calculate(array) {
    return array.reduce( (a,b) => a + b) / array.length;
}
console.log(calculate([24, 88, 12, 4]));



