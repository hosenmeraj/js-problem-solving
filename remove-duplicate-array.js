const names = ['meraj', 'madhu', 'rajkumar', 'noman', 'najmul', 'meraj', 'robin', 'gobindo', 'rajkumar'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     if (unique.indexOf(element) == -1) {
    //         unique.push(element);
    //     }
    // }
    // return unique;
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const removeArray = removeDuplicate(names);
console.log(removeArray);