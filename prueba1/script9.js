var num1 = [];
var num2 = [];
var arr =[];
var arr_long = arr.length;
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


function operarNumArr (arr,op){
    if (op=='+'){
        result = 0;
        for (let i = 0; i < arr.length; i++) {
            result = operarNumeros(result, arr[i],'+');}  
    }
    else if (op=='-'){
            result = arr[0]
            for (let i = 1; i < arr.length; i++) {
            result = result - arr[i];}
    }

    else if (op=='*'){
        result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = result * arr[i];}
    }
    else if (op=='/'){
        result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i]==0) {result=0}
            else {
                result = result / arr[i];
            }
        }
    }
     return result;
}

console.log (operarNumArr([2,4,6,8,9],'+'));

