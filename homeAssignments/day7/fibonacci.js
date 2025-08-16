var num;
function fibonacci(n) {
    var num1 = 0;
    var num2 = 1;
    var num3;
    if (n < 0) {
        console.log("number not ".concat(n));
    }
    else {
        for (var i = 0; i <= n; i++) {
            num3 = num1 + num2;
            num1 = num2;
            num2 = num3;
        }
    }
    return num3;
}
num = 4;
console.log("the fibonacci value ".concat(num, " is ").concat(fibonacci(num)));
num = 5;
console.log("the fibonacci value ".concat(num, " is ").concat(fibonacci(num)));
num = 0;
console.log("the fibonacci value ".concat(num, " is ").concat(fibonacci(num)));
num = 3;
console.log("the fibonacci value ".concat(num, " is ").concat(fibonacci(num)));
num = 6;
console.log("the fibonacci value ".concat(num, " is ").concat(fibonacci(num)));
