class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

const stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(12);
stack.push(18);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());
