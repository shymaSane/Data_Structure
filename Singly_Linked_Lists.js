
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
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        
    }
    //method pop removes from the end of linked lists 
    pop(){
        //if the singly linked list is empty
        if(!this.head) return undefined;
        //current head
        let current = this.head
        //give the new tail initla value
        let newTail = current
        //while loop to loop through the singly linked list:
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;
    }
}

let sll1 = new SinglyLinkedLists()
sll1.push(1)
sll1.push(2)
sll1.push(3)
sll1.push(4)
sll1.pop()