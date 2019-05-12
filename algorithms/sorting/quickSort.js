//set the first element as a pivot
//get srtedIndex which start from pviot+1 and increase when we swap in case if array[i] < array[pivot]
//when finish swap the pivot with the last sorted element(sortedIndex-1) >> because we already increased the sortedindex 

const pivot = (arr, start = 0, end = arr.length+1) => {
    //grab the pivot from the start of array
    let pivot = arr[start];
    let swapIndex = start;
    //loop through the array from the start to the end 
    for(let i = start + 1; i < arr.length; i++){
        //if pivot is greater than the corrent element, increament the pivot index, then swap the element with pivot index
        if(pivot > arr[i]){
            swapIndex++
        }
    }
    //swap the starting elements(pivot)
}