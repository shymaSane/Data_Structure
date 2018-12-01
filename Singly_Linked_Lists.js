
//what singly linked lists look like:
// const list = {
//     head: {
//         value: 12,
//         next: {
//             value: 99,
//             next: {
//                 value: 37,
//                 next: null
//             }
//         }
//     }
// };

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
        this.tail = null;
    }

    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else{
            this.tail = node;
            this.head.next = node;
        }
        this.length++;
        
    }
    //method pop removes from the end of linked lists 
    pop(){
        //if the SLL is empty 
        if(this.lenght === 0){
            return undefined
        }
        // if SLL wasnt empty
        // remember nextNode for the tail is null and thats the stopping condition
        let nextNode = this.head.next;
        let previousNode = this.head
        console.log(nextNode, previousNode)
        while(nextNode){
            previousNode = nextNode
            nextNode = nextNode.next
        }
        console.log(previousNode, nextNode)
        let popValue = this.tail.value; 
        this.tail = previousNode
        return popValue
    }
}