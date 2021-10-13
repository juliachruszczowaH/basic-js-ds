const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.rootnode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootnode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = new Node(data);
    let temp = this.rootnode;
    if (!this.rootnode) {
      return (this.rootnode = node);
    }
    while (temp) {
      if (node.data < temp.data) {
        if (!temp.left) {
          return (temp.left = node);
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          return (temp.right = node);
        }
        temp = temp.right;
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return !this.find(data) ? false : true;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let temp = this.rootnode;
    return traverse(temp);
    function traverse(node) {
      return !node ? null : node.data === data ? node : node.data < data ? traverse(node.right) : traverse(node.left);
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootnode = removeNode(this.rootnode, data);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minData = node.right;
        while (minData.left) {
          minData = minData.left;
        }
        node.data = minData.data;
        node.right = removeNode(node.right, minData.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let temp = this.rootnode;
    while (temp.left) {
      temp = temp.left;
    }
    return temp.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let temp = this.rootnode;
    while (temp.right) {
      temp = temp.right;
    }
    return temp.data;
  }
};
