function maxDepth(root) {
    let maxDepth = 0;
    function max(current) {
        if (!current) return;
        if (current) maxDepth = Math.max(maxDepth, maxDepth + 1);
        max(current.left);
        max(current.right);
    }
    max(root);
    return maxDepth;
}

console.log(maxDepth([4, 2, 7, 1, 3, 6, 9]));
