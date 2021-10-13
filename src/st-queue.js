const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor()
  {
      this.first=null;
      this.last=null;
      this.size=0;
      
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.first;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  let node=new ListNode(value);
  if(!this.first){
    this.first=node;
    this.last=node;
  } else {
    this.last.next=node;
    this.last=node;
  }
  return ++this.size;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.first){
      return null;
    }

    const temp=this.first;
    if(this.first===this.last){
      this.last=null;
    }
    this.first=this.first.next;
    this.size--;

    return temp.value;
  }

}
