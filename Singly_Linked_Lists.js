//this class to init new Node that ll be added to the new linked lists
class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

// this class to init new Linked Lists to add nodes to it

class SinglyLinkedLists{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null
    }

    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node;
            this.tail = node
        } else{
            this.tail = node;
            this.head.next = node
        }
        this.length++
        
    }
}