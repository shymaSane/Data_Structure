//we sort small values at the first(oppest to bubble sort)
//we compare all values to find the minmum one 
// if a<b we save a in min variable 


const selectionSort = (arr, l=0) => {
    if(l < arr.length){
        let min = arr[l];
        for (let i = l+1; i < arr.length; i++) {
            if(arr[i] < min) {
                arr[l] = arr[i]
                arr[i] = min
            }
        
        }
        l +=1
        selectionSort(arr, l)
    }
    
}