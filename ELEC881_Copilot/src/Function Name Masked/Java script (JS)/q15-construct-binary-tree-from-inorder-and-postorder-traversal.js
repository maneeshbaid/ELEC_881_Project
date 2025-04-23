var abc = function(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    var root = new TreeNode(postorder.pop());
    var inorderIndex = inorder.indexOf(root.val);
    root.right = abc(inorder.slice(inorderIndex + 1), postorder);
    root.left = abc(inorder.slice(0, inorderIndex), postorder);
    return root;
};