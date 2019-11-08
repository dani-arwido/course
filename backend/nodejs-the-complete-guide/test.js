const add = (a, b) => {
  console.log(a + b);
};
const sub = (a, b) => {
  console.log(a - b);
};

setTimeout(() => {
  add(5, 5);
}, 2000);

add(3, 2);
sub(3, 2);
