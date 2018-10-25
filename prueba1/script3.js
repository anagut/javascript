var esta_cachas = false;

if(esta_cachas){
    console.log('Qué cachas estás!');}
else{
    console.log('ponte a hacer ejercicio, vago!');
}

var peso=70;
var altura=170;

if(peso<=altura-100-20){
    esta_cachas=false;
    console.log('Come más');
}else if(peso <= altura-100){
    console.log('Qué cachas estás!');
}else{
    console.log('ponte a hacer ejercicio, vago! te sobran: ',peso-(altura-100),'kg');
}
