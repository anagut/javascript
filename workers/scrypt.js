let w= new Worker ('./worker.js')

// w.postMessage('Hola !')

// w.onmessage = function(mess){
//     console.log(mess.data)
// }

let arr = [0,1,2,3,4,5,6,7,8,9];

w.postMessage(arr);

w.onmessage = function (mess){
    console.log(mess.data);
}
