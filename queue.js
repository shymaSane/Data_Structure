class Queue {
    constructor(){
        this.storage = {};
        this.start = 0;
        this.end = 0;
    }
    inQ(val){
        // starts from zero
        this.storage[this.end++] = val
    }
    
    deQ(){
        let value = this.storage[this.start]
        delete this.storage[this.start]
        this.start++;
        return value
    }
    size(){
        return this.end - this.start
    }
}