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

console.log (operarNumeros(4,8,'+'));
console.log (operarNumeros(4,8,'-'));
console.log (operarNumeros(4,8,'*'));
console.log (operarNumeros(4,8,'/'));
console.log (operarNumeros(4,0,'/'));

//function operarNumArr (arr,op) {
//    for (let i = 0; i < arr.length; i++) {
//        if (op=='+'){result= result + arr[i];}
//    };   
//return result;}

function operarNumArr (arr,op){
    if (op=='+'){
        result = 0;
        for (let i = 0; i < arr.length; i++) {
            result = result + arr[i];}  
    }
    else if (op=='-'){
        if (arr.length <=0) {result = 0}
        else {
            result = arr[0]
            for (let i = 1; i < arr.length; i++) {
            result = result - arr[i];}
        }
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

console.log (operarNumArr([2,4,6,8,9],'+'));    //29
console.log (operarNumArr([2,4,6,8,9],'-'));    //-25   
console.log (operarNumArr([2,4,6,8,9],'*'));    //3456
console.log (operarNumArr([2,4,6,8,9],'/'));    //0.001157
console.log (operarNumArr([2,4,6,8,9],'/'));    //0

console.log (operarNumArr([1,2,3,4],'+'));
console.log (operarNumArr([],'-'));  
console.log (operarNumArr([1,2,3,4],'*')); 
console.log (operarNumArr([1,2,3,4],'/'));   

