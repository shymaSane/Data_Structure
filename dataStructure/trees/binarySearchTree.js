//each node shld have two children, one or none.
// store data than can be comapred, so often its numbers 
// so any item is less than the node(parent) is located on the left of it, greater than is located on the right

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
} 

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    //insert node
    insert(value){
        //first check if the value is root
        //start from root < or >  than the value 
        //check the next parents 
        const node = new Node(value)
        if(this.root === null){
            this.root = node
            return this
        } else {
                //check if the value is greater than or less than the root
            //if its greater: check to see if there is a node on the right 
                //if there is then move to the node and repeat steps else add that node to the right
            //if less: check to see if there is node on the left 
                //if there is move and repeat else move that node to the left 
            
            let current = this.root;
            while(true){
                if(value > current.value){
                    if(current.right === null){
                        current.right = node
                        return this
                    } else {
                        current = current.right
                    }
                } else if (value < current.value){
                    if(current.left === null){
                        current.left = node
                        return this
                    } else {
                        current = current.left
                    }
                }
            }
        }
       
        
        
    }
    //find node
    find(value){
        //if there is no nodes
        if(this.root === null) return false
        //search value 
        let current = this.root;
        let found = false;
        while(current && !found){
            if (value === current.value){
                found = true 
                return true
            } else {
                if(value > current.value){
                    current = current.right
                } else {
                    current = current.left
                }
            }
        }
        return false;
    }
    //breadth first search
    BFS(){
        //data for final results, queue for breadth
        let data = [],
            queue = [];
        if (this.root === null) return false;
        //search
        else{
            let currentVal = this.root
            queue.push(currentVal)
            //for loop is to dequeue or queue
            while(queue.length != 0){
                let node = queue.shift()
                data.push(node.value)
                if(node.right) queue.push(node.right)
                if(node.left) queue.push(node.left)
            }
            return data
        }
    }
} 