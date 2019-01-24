
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

    //removes the head 
    shift(){
        //what happens when remving the head 
        //next node becomes the head
        if(this.length === 0) {
            return undefined
        }
        let current = this.head;
        let nextNode = this.head.next;
        this.head = nextNode;
        if(this.length === 1){
            this.tail = nextNode
        }
        this.length--;
        return current
    }
    //adds new node to the beggining
    unShift(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        let nextNode = this.head
        this.head = node;
        this.head.next = nextNode;
        this.length++;
        return this;
    }
    //takes number or position and return the node in that position
    get(index){
        if(index < 1 || index > this.length){
            return null
        }
        let current = this.head
        for(let i = 1; i < index; i++){
            current = current.next
        }
        return current 
    }
    //changes the value of node base on its position
    set(index, newVal){
        let foundValue = this.get(index)
        if(foundValue){
            foundValue.val = newVal
        }
        return foundValue 
    }
    //add nodes at specific position 
    insert(index, val){
        //when insert it ll take the current position
        //the previous node tail ll point to it
        //the current node tai
        let foundValue = this.get(index)
        if(foundValue){
            let node = new Node(val)
            let current = foundValue
            let previousNode = this.get(index-1)
            
        }
        return foundValue 
    }
}

let sll1 = new SinglyLinkedLists()
sll1.push(1)
sll1.push(2)
sll1.push(3)
sll1.push(4)
sll1.pop()