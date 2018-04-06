'use strict';
// create Stack class and implement push, pop, peek

//============================================ Implement Node Class ======================================>


class _Node {
  constructor(value,next) {
    this.value = value;
    this.next = next;
  }
}

//============================================ Implement Stack Class ======================================>


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (this.top === null) {
      const node = new _Node(value,null);
      this.top = node;
      return this.top;
    }

    const node = this.top;
    this.top = new _Node(value,node);
    return this.top;
  }


  pop() {
    if (this.top === null) {
      return console.warn('This list is empty');
    }

    const node = this.top;
    this.top = node.next;
    return node.value;
  }
  
  
}

//============================================ Helper Functions ======================================>


const peek = list => {
  if (!list.top) {
    return console.warn('Empty List');
  }
  return list.top.value;
};

const display = stack => {
  // Display entire stack. Not to be used in production
  if (!stack.top) {
    return console.log('This Stack is empty');
  }

  let currentNode = stack.top;
  console.log('List BEGINNT');
  console.log('Top:');
  while(currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log('LIST STOPPT');
};


const is_palindrome = str => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};

//============================================ Main Function for Implementation ======================================>

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('Scotty');
  starTrek.push('McCoy');
  display(starTrek);
  starTrek.pop();
  display(starTrek);
}

main();



