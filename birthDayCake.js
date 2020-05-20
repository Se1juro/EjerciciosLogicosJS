let ar=[4,5,5,1]
let count=0;
let years=Math.max.apply(null, ar);
count=0;
ar.forEach((i) => {
  if (i == years) {
    count++;
  }
});

console.log(count)
