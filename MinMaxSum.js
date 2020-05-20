let arr = [7,69, 2, 221, 8974];
let suma = 0;
let sumaMin=0;
let sumasMin=[]
arr.forEach((i) => {
  suma = suma+i;
});

arr.forEach((o) => {
    sumaMin=suma-o;
    sumasMin.push(sumaMin)
  });
  let sumaMayor=Math.max.apply(null,sumasMin);
  let sumaMenor=Math.min.apply(null,sumasMin);
  
  console.log(sumaMenor+" "+sumaMayor);

