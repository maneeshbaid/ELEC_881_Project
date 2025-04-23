class abc(object):
    def count(self, n):
        count = 0
        for i in range(1, n+1):
            count += str(i).count('1')
        return count