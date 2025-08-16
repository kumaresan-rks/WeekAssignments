let num:number;
function fibonacci(n: number): number {
let num1:number=0;
let num2:number=1;
let num3;

if(n<0){
    console.log(`number not ${n}`);
 
}
else{
for(let i=0;i<=n;i++){
    num3=num1+num2;
    num1=num2;
    num2=num3;
}
}return num3;
}
num=4;
   console.log(`the fibonacci value ${num} is ${fibonacci(num)}`);
   num=5;
   console.log(`the fibonacci value ${num} is ${fibonacci(num)}`);
   num=0;
   console.log(`the fibonacci value ${num} is ${fibonacci(num)}`);
   num=3;
   console.log(`the fibonacci value ${num} is ${fibonacci(num)}`);
   num=6;
   console.log(`the fibonacci value ${num} is ${fibonacci(num)}`);