/*jshint node: true*/
'use strict';

var Node = function(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};

Node.prototype.show = function() {
  return this.data;
};

var preOrder = function(node) {
  if (node !== null) {
    console.log(node.show() + ' ');
    inOrder(node.left);
    inOrder(node.right);
  }
};

var inOrder = function(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + ' ');
    inOrder(node.right);
  }
};

var postOrder = function(node) {
  if (node !== null) {
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.show() + ' ');
  }
};

var countBst = function(node) {
  var count = 0;
  var inOrder = function(node) {
    if (node !== null) {
      inOrder(node.left);
      count++;
      inOrder(node.right);
    }
  };
  inOrder(node);
  return count;
};

var BST = function() {
  this.root = null;
};

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.getMin = function(node) {
  var current = node || this.root;
  var parent = current;
  while (current.left !== null) {
    current = current.left;
  }
  if (current.data < parent.data) {
    return current;
  } else return parent;
};

BST.prototype.getMax = function(node) {
  var current = node || this.root;
  var parent = current;
  while (current.right !== null) {
    current = current.right;
  }
  if (current.data > parent.data) {
    return current;
  } else return parent;
};

BST.prototype.findData = function(data) {
  var current = this.root;
  var parent = current;
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current === null) {
      return null;
    }
  }
  return current;
};

BST.prototype.removeData = function(data) {
  var current = this.root;
  var parent = current;
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current === null) {
      return null;
    }
  }
  if (current.data === data) {
    console.log('parent of the min or max', parent);
    if (parent.left.data === data) {
      parent.left = null;
    } else {
      parent.right = null;
    }
    console.log('current', current);
    console.log('parent', parent);
    console.log('this.root', this.root);
  }
};

BST.prototype.removeNode = function(data) {
  console.log('removeing Node', data);
  var current = this.root;
  var parent;
  while (current.data !== data) {
    if (data < current.data) {
      parent = current;
      current = current.left;
    } else {
      parent = current;
      current = current.right;
    }
    if (current === null) {
      return null;
    }
  }
  if (!current.left && !current.right) {
    console.log('no child');
    this.root = null;
  } else if (current.right === null) {
    console.log('1 child');
    this.root = current.left;
  } else {
    this.root = current.right;
  }

  if (current.left && current.right) {
    console.log(2 + 'child');
    var temp = this.getMin(current.right);
    console.log('get Min in temp.current.right', temp);
    console.log('current', current);
    current.data = temp.data;
    console.log('current with data replaced', current);

    this.removeData(temp.data);
  }
};

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMax();
console.log('The maximum value of the BST is: ');

console.log('====================================');

var min = nums.getMin();
console.log('The minimum value of the BST is: ' + min);

preOrder(nums.root);

nums.removeNode(12);

preOrder(nums.root);
inOrder(nums.root);
postOrder(nums.root);
console.log(nums);
