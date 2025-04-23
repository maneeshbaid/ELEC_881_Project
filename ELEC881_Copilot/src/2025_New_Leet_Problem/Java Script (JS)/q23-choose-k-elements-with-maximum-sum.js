/*
You are given two integer arrays, nums1 and nums2, both of length n, along with a positive integer k.

For each index i from 0 to n - 1, perform the following:

Find all indices j where nums1[j] is less than nums1[i].
Choose at most k values of nums2[j] at these indices to maximize the total sum.
Return an array answer of size n, where answer[i] represents the result for the corresponding index i.

 

Example 1:

Input: nums1 = [4,2,1,5,3], nums2 = [10,20,30,40,50], k = 2

Output: [80,30,0,80,50]

Explanation:

For i = 0: Select the 2 largest values from nums2 at indices [1, 2, 4] where nums1[j] < nums1[0], resulting in 50 + 30 = 80.
For i = 1: Select the 2 largest values from nums2 at index [2] where nums1[j] < nums1[1], resulting in 30.
For i = 2: No indices satisfy nums1[j] < nums1[2], resulting in 0.
For i = 3: Select the 2 largest values from nums2 at indices [0, 1, 2, 4] where nums1[j] < nums1[3], resulting in 50 + 30 = 80.
For i = 4: Select the 2 largest values from nums2 at indices [1, 2] where nums1[j] < nums1[4], resulting in 30 + 20 = 50.
Example 2:

Input: nums1 = [2,2,2,2], nums2 = [3,1,2,3], k = 1

Output: [0,0,0,0]

Explanation:

Since all elements in nums1 are equal, no indices satisfy the condition nums1[j] < nums1[i] for any i, resulting in 0 for all positions.

 

Constraints:

n == nums1.length == nums2.length
1 <= n <= 105
1 <= nums1[i], nums2[i] <= 106
1 <= k <= n
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function(nums1, nums2, k) {
    let n = nums1.length;
    let res = new Array(n).fill(0);
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([nums1[i], nums2[i]]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let max = 0;
    let sum = 0;
    let pq = new PriorityQueue((a, b) => a[1] - b[1]);
    for (let i = 0; i < n; i++) {
        while (pq.size() && pq.size() > k) {
            sum -= pq.poll()[1];
        }
        res[arr[i][0]] = sum;
        sum += arr[i][1];
        pq.add(arr[i]);
    }
    return res;
    
};

class PriorityQueue {
    constructor(compare) {
        this.compare = compare;
        this.pq = [];
    }
    
    add(val) {
        this.pq.push(val);
        this.bubbleUp(this.pq.length - 1);
    }
    
    poll() {
        if (this.size() === 0) {
            return null;
        }
        let res = this.pq[0];
        let end = this.pq.pop();
        if (this.size() > 0) {
            this.pq[0] = end;
            this.bubbleDown(0);
        }
        return res;
    }
    
    size() {
        return this.pq.length;
    }
    
    bubbleUp(n) {
        while (n > 0) {
            let parentN = Math.floor((n + 1) / 2) - 1;
            if (this.compare(this.pq[n], this.pq[parentN]) < 0) {
                this.swap(n, parentN);
                n = parentN;
            } else {
                break;
            }
        }
    }
    
    bubbleDown(n) {
        while (true) {
            let child1 = (n + 1) * 2 - 1;
            let child2 = (n + 1) * 2;
            let swapIndex = null;
            if (child1 < this.size() && this.compare(this.pq[child1], this.pq[n]) < 0) {
                swapIndex = child1;
            }
            if (child2 < this.size() && this.compare(this.pq[child2], this.pq[n]) < 0 && this.compare(this.pq[child2], this.pq[child1]) < 0) {
                swapIndex = child2;
            }
            if (swapIndex === null) {
                break;
            }
            this.swap(n, swapIndex);
            n = swapIndex;
        }
    }
    
    swap(n, m) {
        let temp = this.pq[n];
        this.pq[n] = this.pq[m];
        this.pq[m] = temp;
    }
}