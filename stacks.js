function Stack() {
  this.items = [];
  this.push = function (element) {
    this.items.push(element);
  };
  this.pop = function () {
    return this.items.pop();
  };
  this.peek = function () {
    return this.items[this.items.length - 1];
  };
  this.isEmpty = function () {
    return this.items.length == 0;
  };
  this.clear = function () {
    this.items = [];
  };
  this.print = function () {
    console.log(this.items.toString());
  };
  this.size = function () {
    return this.items.length;
  };
}

const myStack = new Stack();
myStack.push(34);
myStack.push(48);
myStack.push(17);
myStack.push(23);

myStack.print();
