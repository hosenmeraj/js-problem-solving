const bussiness = 550;
const minister = 450;
const army = 400;
// if ((bussiness > minister) && (bussiness > army)) {
//     console.log('business is max number');
// }
// else if ((minister > bussiness) && (minister > army)) {
//     console.log('minister is max number');
// }
// else {
//     console.log('army is max number');
// }

// function maxNumber(bussiness, minister) {
//     if (bussiness > minister) {
//         return bussiness;
//     }
//     else {
//         return minister;
//     }

// }
// var myNumber = maxNumber(500, 600);

// console.log('Largest number is', myNumber);

var max = Math.max(bussiness, minister, army);
console.log(max);