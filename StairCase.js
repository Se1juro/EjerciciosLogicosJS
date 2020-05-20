let n =4;

if (n < 0 || n >= 100) {
    console.log("Ingrese un numero numero")
} else {
    for (let i = 1; i < n+1; i++) {
            console.log(" ".repeat(n-i)+"#".repeat(i))
    }
}