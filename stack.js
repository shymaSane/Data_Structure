// class Stack {
//     constructor(){
//         this.storage = [];
//     }
//     //push value into the storage
//     push(val) {
//         this.storage.push(val);
//         return this.storage
        
//     }
//     pop(){
//         let pop = (this.storage).splice(this.storage.length-1,1)
//         return pop
//     }
//     size(){
//         return (this.storage).length
//     }
// }
// const test = new Stack ()
// test.push(1);


// class Stack{
//     constructor(){
//      this.strage = {}
//      this.counter = 0
//     }
//     push(val){
//         this.storage[this.counter++] = val
//         return this.storage
//     }
//     pop(){ 
//         let pop = delete this.storage[this.counter]
//         return pop
//     }
//     size(){
//         return counter
//     }
// }

var Stack = function (){
 this.storage ={}
 this.counter = 0
}


Stack.prototype.push = function(val){
    this.storage[this.counter++] = val
    return this.storage
}

Stack.prototype.pop = function() {
   var val = delete this.storage[this.counter]
   return val
}

Stack.prototype.size = function(){
    return counter
 }




