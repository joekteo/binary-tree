/*jshint node: true*/
'use strict';

var Setup = require('./setup.js');

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

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
print('The minimum value of the BST is: ' + min);

// 4. Add a min() function to the BST class that finds
// the minimum value in a BST.
