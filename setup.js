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

var countNode = function(node) {
  var count = 0;
  var inOrder = function(node){
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
        current = current.left; if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right; if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
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

console.log('Preorder traversal: ');
preOrder(nums.root);
console.log('====================');

console.log('Inorder traversal: ');
inOrder(nums.root);
console.log('====================');

console.log('Postorder traversal: ');
postOrder(nums.root);
console.log('====================');

module.exports = Setup;

