'use strict';
class _Node {
  constructor(value,prev=null,next=null) {
    this.value = value;
    this.next =next;
    this.prev = prev;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const node = new _Node(value);
    
    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }


    this.last = node;
  }


  dequeue() {
    if (this.first === null) {
      console.warn('This Queue is empty');
      return false;
    }
    
    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}
//============================================================ Helper Functions ==========================================================>

const display = queue => {
  let currentNode = queue.first;
  console.log('LIST BEGIN');
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.prev;
  }
  console.log('LIST FINISH');
}

const peek = queue => {
  return queue.first;
}



//============================================================ Square Dance Pairing ==========================================================>


// intake an array of objects describing Male or Female, as well as the name of the individual.
// create a new Array called dancePlan
// iterate through array and push all men through to a new queue
// iterate through the remaining array of women , pushing a woman and a man from the queue together each time. 
// return which one has an extra waiting

const squareDance = arrOfPeople => { 
  let dancePlan = [];
  const menQueue = new Queue();
 let remainingWomen = arrOfPeople.filter(person => {
   if (person.G === 'M') {
    menQueue.enqueue(person.name);
  } else {
    return person.G === 'F'
  }
 })

 while (peek(menQueue) && remainingWomen.length) {
  dancePlan.push({male: menQueue.dequeue(), female: remainingWomen[0].name}); 
  remainingWomen.shift();
 }
 if (peek(menQueue) || remainingWomen.length) {
   dancePlan = {
     plan: dancePlan,
     remaining: peek(menQueue) ? menQueue.dequeue() : remainingWomen[0].name
   }
 }
 return dancePlan;
}




// Previous points to the end of the queue (right side);
// Next points to the beginning (left side);
//Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, Checkov to the queue.


//============================================================ Main Function for Implementation ==========================================================>

function main() {
  // const myQueue = new Queue();
  // myQueue.enqueue('Kirk');
  // myQueue.enqueue('Spock');
  // myQueue.enqueue('Uhura');
  // myQueue.enqueue('Sula');
  // myQueue.enqueue('Checkov');
  // myQueue.dequeue();
  // myQueue.dequeue();
  // myQueue.dequeue();
  // myQueue.dequeue();
  // myQueue.dequeue();
  // myQueue.dequeue();
  // display(myQueue);
  // console.log('peek', peek(myQueue).value);
  const arrOfDancers = [
    {G:'M', name:'Gerland'},
    {G:'M', name:'Franke'},
    {G:'F', name:'Rosalind'},
    {G:'F', name:'Susan'},
    {G:'F', name:'Claire'},
    {G:'M', name:'George'},
    {G:'M', name:'Ray'},
  ]

  console.log(squareDance(arrOfDancers));
}

main();