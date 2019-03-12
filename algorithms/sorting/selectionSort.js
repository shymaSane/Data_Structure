//we sort small values at the first(oppest to bubble sort)
//we compare all values to find the minmum one 
// if a<b we save a in min variable 

//l=0  is the postion where we want to start search
const selectionSort = (arr, l=0) => {
            min = l;
            for (let i = l+1; i < arr.length; i++) {
                if(arr[i] < arr[min]) {
                    min = i
                }
            }
            if(l < arr.length-1){
                [arr[min], arr[l]] = [arr[l], arr[min]]
                console.log(x)
                l += 1
                selectionSort(arr, l)
            }
            
}

let x = [1, -2, 4, -3, 0, -5, 5, 3, 2, -1, -4]

console.log(selectionSort(x))