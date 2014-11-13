/*jshint node: true*/
'use strict';

var Setup = require('./setup.js');

BST.prototype.getMax = function(node) {
  var current = node || this.root;
  var parent = current;
  while (current.right !== null) {
    current = current.right;
  }
  if (current.data < parent.data) {
    return current;
  } else return parent;
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
print('The maximum value of the BST is: ' + max);

// 3. Add a max() function to the BST class that finds
// the maximum value in a BST.

