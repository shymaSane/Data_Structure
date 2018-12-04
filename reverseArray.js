function reverseArray(a) {
    let newArray = []
    let start = a.length-1
    for (let i = start; i >= 0; i--){
        newArray.push(a[i])
    }
    return newArray
}

///
reverseArray([1,2,3,4,5])
////
///easier solution 
console.log(arr.reverse().join(' '));