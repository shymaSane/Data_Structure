//its not commonly used:
//it sorts the large numbers first
//it cmpares the current index to the next index then swap
//since we decided what is the bigger value the length of the loop become shorter

//swaping function using ES6:
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const bubbleSort = (arr, n = 1) => {
    if(n <= arr.length){
        for (let i = 0; i < (arr.length-n) ; i++) {
            if(arr[i] > arr[i+1]){
                swap(arr, i, i+1)
            } 
           
        }
        n +=1 
        bubbleSort(arr, n)
    }
}