class abc(object):
    def bcd(self, inorder, postorder):
        # Implement the solution to construct a binary tree from inorder and postorder traversals
        # using a recursive approach
        if not inorder or not postorder:
            return None

        root_value = postorder.pop()
        root = TreeNode(root_value)

        index = inorder.index(root_value)
        root.right = self.bcd(inorder[index + 1:], postorder)
        root.left = self.bcd(inorder[:index], postorder)

        return root

        
    