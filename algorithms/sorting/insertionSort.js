//devided sort and unsorted array 

const insertionSort = (arr, l = 1) =>{
    for(let i = l-1; i >= 0 && arr[i] > arr[i+1]; i--){
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]]
    }

    if(l < arr.length){
        l += 1;
        console.log(arr)
        insertionSort(arr, l)
    }
    return arr
}

arr = [3, 5, 2, 4, 1] 
console.log(insertionSort(arr))
