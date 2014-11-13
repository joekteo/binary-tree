/*jshint node: true*/
'use strict';

var Setup = require('./setup.js');

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

// 1. Add a function to the BST class that counts the
// number of nodes in a BST.
