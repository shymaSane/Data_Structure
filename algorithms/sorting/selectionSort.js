//we sort small values at the first(oppest to bubble sort)
//we compare all values to find the minmum one 
// if a<b we save a in min variable 

//l=0  is the postion where we want to start search
const selectionSort = (arr, l=0) => {
            let min = arr[l];
            for (let i = l+1; i < arr.length; i++) {
                if(arr[i] < min) {
                   min = arr[i]
                   arr[i] = arr[l]
                }
            }

            if(l < arr.lenght){
                l += 1
                selectionSort(arr, l)
            }
            
}

let x = [1, -2, 4, -3, 0, -5, 5, 3, 2, -1, -4]

console.log(selectionSort(x))