var mis_numeros_hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

console.log(mis_numeros_hex)

for (let index = 0; index < mis_numeros_hex.length; index=index+2) {
    console.log('El valor en el índice',index,' es ',mis_numeros_hex[index]);
}

mis_numeros_hex[3]=45;
mis_numeros_hex[15]='Xx';

console.log(mis_numeros_hex)