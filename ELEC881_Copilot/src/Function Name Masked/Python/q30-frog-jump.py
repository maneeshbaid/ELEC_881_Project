class ab(object):
    def can(self, stones):
        if stones[1] != 1:
            return False
        if len(stones) == 2:
            return True
        for i in range(2, len(stones)):
            if stones[i] > stones[i-1] + i:
                return False
        return True