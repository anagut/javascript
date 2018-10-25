var num1 = [];
var num2 = [];
var arr =[];
var op= ['+','-','*','/'];
var resultado = 0;
var result = 0;


function operarNumeros (num1,num2,op) {
    if (op=='+'){resultado = num1+num2;}
    else if (op=='-'){resultado= num1-num2;}
    else if (op=='*'){resultado= num1/num2;}
    else if (op=='/'){
        if (num2==0){resultado= 0;}
         else {resultado= num1/num2}}
    return resultado;}

console.log (operarNumeros(4,8,'+'));
console.log (operarNumeros(4,8,'-'));
console.log (operarNumeros(4,8,'*'));
console.log (operarNumeros(4,8,'/'));
console.log (operarNumeros(4,0,'/'));

function operarNumArr (arr,op) {
    for (let i = 0; i < arr.length; i++) {
        if (op=='+'){result= result + arr[i];}
    };   
return result}

console.log (operarNumArr([2,4,6,8,9],'+'));