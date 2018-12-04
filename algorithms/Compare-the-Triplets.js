function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let result = []
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            alice += 1
        } else {
            bob =+ 1
        }
    }
    result.push(alice, bob)
    return result
}

/////
