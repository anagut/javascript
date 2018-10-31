// onmessage = function (mess) {
//     let text = mess.data;
//     this.postMessage("*"+text+"*"+"Álvaro no te enteras")
// }

onmessage  = function (mess) {
    let nums = mess.data;
    console.log(nums);

    let result = nums.reduce((ant, act) => {
        return ant+=act;
    })

    // for (let i = 0; i < num.length; i++) {
    //     suma = suma + arr[i];}

    this.postMessage(result);
}