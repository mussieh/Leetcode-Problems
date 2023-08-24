function bfs(root, leftToRight) {
    let visited = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        visited.push(node?.val);
        if (leftToRight) {
            if (node?.left) {
                queue.push(node?.left);
            } else {
                if (node?.right) queue.push(null);
            }
            if (node?.right) {
                queue.push(node?.right);
            } else {
                if (node?.left) queue.push(null);
            }
        } else {
            if (node?.right) {
                queue.push(node?.right);
            } else {
                if (node?.left) queue.push(null);
            }
            if (node?.left) {
                queue.push(node?.left);
            } else {
                if (node?.right) queue.push(null);
            }
        }
    }
    return visited;
}

function dfsInorder(root) {
    let visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.val);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return visited;
}

function isSymmetric(root) {
    let dfsList = dfsInorder(root);
    let dfsListReversed = dfsList.slice().reverse();
    let bfsLeftRight = bfs(root, true);
    let bfsRightLeft = bfs(root, false);
    for (let i = 0; i < bfsLeftRight.length; i++) {
        if (bfsLeftRight[i] !== bfsRightLeft[i]) return false;
        if (dfsList[i] !== dfsListReversed[i]) return false;
    }
    return true;
}
