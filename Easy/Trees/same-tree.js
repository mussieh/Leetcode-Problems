function isSameTree(p, q) {
    if (!p && !q) return true;
    if (p?.val !== q?.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(isSameTree());
