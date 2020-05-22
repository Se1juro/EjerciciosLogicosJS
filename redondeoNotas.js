let arr = [73, 67, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    let restar = parseInt(grades[i]);
    let resultado = Math.ceil(grades[i] / 5) * 5;
    let comparar = parseInt(resultado - restar);
    if (comparar < 3) {
      if (grades[i] >= 38) {
        grades[i] = resultado;
        console.log("Ahora valgo: " + grades[i]);
      }
    }
  }
  return grades;
}

gradingStudents(arr);
