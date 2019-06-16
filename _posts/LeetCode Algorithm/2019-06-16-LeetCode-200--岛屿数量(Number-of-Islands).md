![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-6b16316b977946f3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [200\. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

```
200. 岛屿的个数
    给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

    示例 1:

    输入:
    11110
    11010
    11000
    00000

    输出: 1
    示例 2:

    输入:
    11000
    11000
    00100
    00011

    输出: 3
```

## Python3 实现
### 染色法 + DFS

```python
# @author:leacoder
# @des:  染色法 + DFS 岛屿的个数


class Solution:
    # 便于 上下左右扩散
    dx = [-1, 1, 0, 0]
    dy = [ 0, 0,-1, 1]
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]: return 0 # 参数判断
        self.max_x = len(grid);self.max_y = len(grid[0]);self.grid = grid
        self.visited = set() # 不修改原数据
        return sum([self.floodfill_DFS(i,j) for i in range(self.max_x) for j in range(self.max_y)])
    
    # 深度优先 染色
    def floodfill_DFS(self,x,y):
        if not self._is_valid(x,y): # 判断节点是否合法
            return 0
        self.visited.add((x,y)) # 表示节点已经访问过
        for k in range(4):
            self.floodfill_DFS( x + self.dx[k], y + self.dy[k]) # 上下左右扩散
      
```

### 染色法 + BFS

```python
# @author:leacoder
# @des:  染色法 + BFS 岛屿的个数


class Solution:
    # 便于 上下左右扩散
    dx = [-1, 1, 0, 0]
    dy = [ 0, 0,-1, 1]
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]: return 0 # 参数判断
        self.max_x = len(grid);self.max_y = len(grid[0]);self.grid = grid
        self.visited = set() # 不修改原数据
        return sum([self.floodfill_BFS(i,j) for i in range(self.max_x) for j in range(self.max_y)])
    
    # 广度优先 染色
    def floodfill_BFS(self,x,y):
        if not self._is_valid(x,y): # 判断节点是否合法
            return 0
        self.visited.add((x,y)) # 标记节点已经访问过
        queue = collections.deque() # 队列
        queue.append((x,y))
        while queue: # 不为空一直循环
            cur_x, cur_y = queue.popleft() # 从队列左端取数据
            
            for i in range(4):
                new_x, new_y = cur_x + self.dx[i], cur_y + self.dy[i] #上下左右扩散
                if self._is_valid(new_x, new_y): # 扩散后的数据是否合法
                    self.visited.add((new_x, new_y)) # 合法标记节点已经访问过
                    queue.append((new_x, new_y)) # 从右端加入队列
        return 1
    
    # 判断节点是否合法
    def _is_valid(self,x,y):
        # max_X max_y边界
        if x < 0 or x >= self.max_x or y < 0 or y >= self.max_y:
            return False
        # 是 '0' 水  或者 已经访问过（处理过）
        if self.grid[x][y] == '0' or ((x,y) in self.visited):
            return False
        return True
```


### 并查集 

```python

# @author:leacoder
# @des:  并查集 岛屿的个数

'''
1、初始化：将所有'1'（陆地）节点 root 指向自己
2、遍历：遍历所有节点，为1 相邻节点合并，为0 不管
3、遍历查询总共有多少root（可在2统计）
'''

class UnionFind(object):
    def __init__(self,grid):
        m, n = len(grid), len(grid[0])
        self.count = 0
        self.parent = [-1]*(m*n)
        self.rank = [0]*(m*n)
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1': # 为 1 时 count + 1
                    self.parent[i*n+j] = i*n+j  # 初始化：将所有'1'（陆地）节点 root 指向自己
                    self.count +=1
    
    def find(self,i):
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])  # 如果parent不是自己，继续向上查找，找到属于哪个集合
        return self.parent[i] # 如果parent是自己,返回这个值
    
    def union(self,x,y):
        rootx = self.find(x) # 找 x 的 parent
        rooty = self.find(y) # 找 y 的 parent
        if rootx != rooty: # 不同 不在一个集合中
            ''' 如果不管rank 
            if self.rank[rootx] > self.rank[rooty]:
                self.parent[rooty] = rootx
            elif self.rank[rootx] < self.rank[rooty]:
                self.parent[rootx] = rooty
            else:
                self.parent[rooty] = rootx
                self.rank[rootx] += 1
            '''
            self.parent[rootx] = rooty # 将两个 合为 同一个 集合中
            self.count -=1  # 每次union  count-1
            

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]:
            return 0

        uf = UnionFind(grid)
        directions = [(0,1),(0,-1),(-1,0),(1,0)]
        m, n = len(grid), len(grid[0])
        
        for i in range(m):
            for j in range(n):  # 遍历：遍历所有节点，为1 相邻节点合并，为0 不管
                if grid[i][j] == '0':
                    continue
                for d in directions: # 上下左右 扩散
                    nr,nc = i + d[0],j+d[1]                
                    if nr >= 0 and nc >= 0 and nr < m and nc < n and grid[nr][nc] == '1': # 坐标合法 并且 为 1
                        uf.union(i*n+j,nr*n+nc) # 为1 相邻节点合并到同一集合
        # 遍历查询总共有多少root（可在2统计）
        return uf.count # 由于 union 中 被合并为同一集合 count -1 ，最后就剩 唯一的了 
```


----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*
>*知乎个人首页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*
>*简书个人首页：*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*
>*个人Blog:*
>*[https://lichangke.github.io/](https://lichangke.github.io/)*
>*欢迎大家来一起交流学习*
