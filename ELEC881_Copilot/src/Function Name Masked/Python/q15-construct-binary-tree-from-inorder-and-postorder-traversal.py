class abc(object):
    def bcd(self, inorder, postorder):
        if not inorder or not postorder:
            return None
        root = TreeNode(postorder.pop())
        inorderIndex = inorder.index(root.val)
        root.right = self.bcd(inorder[inorderIndex+1:], postorder)
        root.left = self.bcd(inorder[:inorderIndex], postorder)
        return root
    
    