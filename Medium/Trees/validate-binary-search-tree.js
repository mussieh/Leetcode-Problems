class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

let seven = new TreeNode(7);
let three = new TreeNode(3);
let six = new TreeNode(6, three, seven);
let four = new TreeNode(4);
let root = new TreeNode(5, four, six);

var isValidBST = function (root) {
    if (root === null || (root.left === null && root.right === null))
        return true;
    if (
        (root.left !== null && root.left.val >= root.val) ||
        (root.right !== null && root.right.val <= root.val) ||
        (root.left !== null &&
            root.left.right !== null &&
            root.left.right.val >= root.val) ||
        (root.right !== null &&
            root.right.left !== null &&
            root.right.left.val <= root.val) ||
        (root.left !== null &&
            root.left.right !== null &&
            root.left.right.right !== null &&
            root.left.right.right.val >= root.val) ||
        (root.right !== null &&
            root.right.left !== null &&
            root.right.left.left !== null &&
            root.right.left.left.val <= root.val)
    ) {
        return false;
    }
    return isValidBST(root.left) && isValidBST(root.right);
};

console.log(isValidBST(root));

// [120,70,140,50,100,130,160,20,55,75,110,119,135,150,200]
