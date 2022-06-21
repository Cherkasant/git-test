function sum(a, b) {
  return a + b;
}
function cube(a) {
  return a ** 3;
}
const sum1 = (a, b) => {
  return a + b;
};
console.log(sum((a = 42), (b = 11)));
const cube1 = (a) => a ** 3;
console.log(cube1((a = 5)));
