var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let hasPath = false;
    let sum = 0;

    function traverse(node) {
        if (node === root.right) sum = root.val;
        sum += node.val;
        if (!node.left && !node.right && sum === targetSum) {
            hasPath = true;
            return;
        }
        if (node.left && !hasPath) traverse(node.left);
        if (node.right && !hasPath) traverse(node.right);
        sum -= node.val;
    }
    traverse(root);
    return hasPath;
};
