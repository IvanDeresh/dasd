// Визначення структури вузла дерева
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Функція для виконання правого оберту
function rightRotate(y) {
  const x = y.left;
  y.left = x.right;
  x.right = y;
  return x;
}

// Функція DSW для перетворення дерева в список
function dswTransform(root) {
  while (root) {
    if (root.left) {
      root = rightRotate(root);
    } else {
      root = root.right;
    }
  }
}

// Функція для побудови збалансованого дерева зі списку
function buildBalancedTree(root, n) {
  const m = 2 ** (Math.floor(Math.log2(n + 1)) - 1) - 1;
  let current = root;

  for (let i = n - m; i > 0; i--) {
    current = rightRotate(current);
    current = current.right;
  }

  while (m > 1) {
    m = m >> 1;

    current = root;
    for (let i = 0; i < m; i++) {
      current = rightRotate(current);
      current = current.right;
    }
  }
}

// Приклад використання
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);

console.log("До перетворення в список:");
console.log(root);

// Крок 1: Перетворення в список
dswTransform(root);

console.log("Після перетворення в список:");
console.log(root);

// Крок 2: Побудова збалансованого дерева
buildBalancedTree(root, 4);

console.log("Після побудови збалансованого дерева:");
console.log(root);
