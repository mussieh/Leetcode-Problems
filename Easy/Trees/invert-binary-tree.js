function invertTree(root) {
    function invert(current) {
        if (!current) return;
        let temp = current.left;
        current.left = current.right;
        current.right = temp;
        invertTree(current.left);
        invertTree(current.right);
    }
    invert(root);
    return root;
}

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
