// function largestElement(number) {
//     let max = number[0];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
// const arrayMax = [20, 30, 9, 11, 40, 33];
// const myMaxNumber = largestElement(arrayMax);
// console.log(myMaxNumber);


//small number 

function smallestElement(number) {
    let min = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
const arrayMax = [2, 30, 20, 3, 40, 23, 55];
const myArrayNumber = smallestElement(arrayMax);
console.log(myArrayNumber);