/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    let helper = function(start, end) {
        if (start > end) {
            return null;
        }
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = helper(map[val] + 1, end);
        root.left = helper(start, map[val] - 1);
        return root;
    };
    return helper(0, inorder.length - 1);
    
};