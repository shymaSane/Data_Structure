// first start to implement a function responsible for merging two sorted array, and create new array which is sorted 
//O(n+m) => itreat each item in the two arrays once 

const merge = (arr1, arr2) => {
    //if the value in the first array is smaller than the value of the second array, then push the value in the new array,move to the next value in the first array;
    //if the value in the first array is larger than the value in the second array, push the value in the second array into new array then move to the next value in the second array 
    let newArray = [];
    let i = 0
    let j = 0
    while ( j < arr2.length && i < arr1.length) {
        if(arr1[i] < arr2[j]){
            newArray.push(arr1[i]);
            i++
        } else {
            newArray.push(arr2[j]);
            j++
        }
    }
    //to push the rest of the array, in case is longer than the other
    //not we already increament the value of j and i
    while( i < arr1.length){
        newArray.push(arr1[i])
        i++
    }
    while( j < arr2.length){
        newArray.push(arr2[j])
        j++
    }
        
    return newArray;

}




merge([1, 10, 50], [2, 14, 99, 100])