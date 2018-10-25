var mascotas = []

for (let index = 0; index < 1000; index++) {
    mascotas[index]= 'Perrito ' + [index+1];   
}

//for (let index = 0; index < 1000; index++) {
//    console.log('Mi mascotita ',[index],'se llama ',mascotas[index]);     
//}

for (let index = 0; index < 1000; index=index+2) {
    if (index==0){
        console.log(mascotas[index],'no tiene hermanos.')} 
    else{console.log(mascotas[index],'es hermano de',mascotas[index-1])
    }
}
