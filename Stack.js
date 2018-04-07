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
    // console.log('this is the TOP: ', this.top);
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

  peek() {
    if (this.top === null) {
      return false;
    }
    return this.top;
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



//============================================ Sort Stack ======================================>

// algorithm takes in a stack with numbers;
// create a new stack
// loop through the current stack
//  each iteration, pop the value off of the top of the original stack & compare it with
// the peek value of the new stack.
// If the new stack's value is greater, just insert the new value into the new stack.
// If the original stack's value is greater, pop off the new stack's top value and insert the
// value that was just popped off of the original stack, then re-insert the new stack's value that
// was removed. 
// Return the new stack.


// const sortStack = givenStack => {
//   const newStack = new Stack();
//   while (givenStack.top !== null) {

//     let oldStackNode = givenStack.pop();

//     if (newStack.peek()) {
//       if (newStack.peek().value >= oldStackNode.value ) {
//         newStack.push(oldStackNode.value);
//       } else {
//         let newStackNode = newStack.pop();
//         newStack.push(oldStackNode.value);
//         newStack.push(newStackNode.value);
//       }
//     } else {
//       newStack.push(oldStackNode.value);
//     }

//   }
//   return newStack;
// };


// OK So none of that worked. Let's try again

/**
 * SortStack: Sorts a given stack class according  ascending numerically
 * @param: stack {Stack} Stack to sort
 * @returns: stack {Stack} sorted Stack
 */

// Take in stack
// create temporary stack;
// while the current stack is not empty:
//  pop the current stack's top value and store it as TMP
//  while the temporary stack is not empty and it's top value is less than TMP
//    pop off the temp stack's value and push it to the original stack
//  push TMP to the temp stack
//  return the temporary stack

const stackSort = stack => {
  const newStack = new Stack();

  while (stack.top !== null) {

    const tempNode = stack.pop();

    while (newStack.top !== null && newStack.peek().value < tempNode.value) {
      stack.push(newStack.pop().value);
    }
    newStack.push(tempNode.value);

  }

  return newStack;
};






//============================================ Main Function for Implementation ======================================>

function main() {
  // const starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('Scotty');
  // starTrek.push('McCoy');
  // display(starTrek);
  // starTrek.pop();
  // display(starTrek);
  // console.log(isPalindrome('a man! a plann! a canal! panama!'));
  // console.log(validSyntax('(3+3) + 5 - (2+3)'));

  const ssNode = new Stack();
  ssNode.push(21);
  ssNode.push(955);
  ssNode.push(23);
  ssNode.push(-542);
  ssNode.push(7);
  ssNode.push(1430);
  ssNode.push(0);
  console.log('Original Stack: ');
  display(ssNode);
  console.log('New Stack');
  let newStack = stackSort(ssNode);
  display(newStack);
}

main();
