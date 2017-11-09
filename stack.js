class Stack {
    constructor(){
        this.storage = [];
    }
    //push value into the storage
    push(val) {
        this.storage.push(val);
        
    }
    pop(){
        let pop = (this.storage).splice(this.storage.length-1,1)
        return pop
    }
    size(){
        return (this.storage).length
    }
}
const test = new Stack ()
