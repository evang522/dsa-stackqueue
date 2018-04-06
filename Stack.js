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
      return false;
    }

    const node = this.top;
    this.top = node.next;
    return node;
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


//============================================ Check for Palindromes ======================================>

const isPalindrome = str => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const stringStack = new Stack();

  for (let i = 0; i<str.length;i++) {
    stringStack.push(str[i]);
  }

  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (stringStack.pop().value !== str[i]) {
      result = false;
    }
  }

  return result;

};

//============================================ Check for Errors in Syntax ======================================>

// Arithmetic expression= '(3+3) + 5 - ((2+3)'

// use a for loop to loop through the expression. 
// Every time there is an open parentheses, push an object containing the openData type and the index with which it started.
// Every time there is a close parentheses, pop the most recent parentheses in the stack
// Once the for loop is finished, if stack.pop() === false, then return 'valid expression'. if this function returns something, return `Unclosed Parentheses at this index`

const validSyntax = str => {
  const syntaxStack = new Stack();
  for (let i=0; i<str.length;i++) {
    if (str[i] === '(') {
      syntaxStack.push({index:i});
    } else if (str[i] === ')') {
      syntaxStack.pop();
    } else {
      continue;
    }
  }


  let openParens = syntaxStack.pop().value;
  if (!openParens) {
    return 'Your expression has valid syntax';
  } else {
    return `Unclosed parenthesis at index ${openParens.index}`;
  }
};




//============================================ Main Function for Implementation ======================================>

function main() {
  const starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('Scotty');
  // starTrek.push('McCoy');
  // display(starTrek);
  // starTrek.pop();
  // display(starTrek);
  // console.log(isPalindrome('a man! a plann! a canal! panama!'));
  console.log(validSyntax('(3+3) + 5 - (2+3)'));
}

main();



