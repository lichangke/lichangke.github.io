---
layout: post
title:  LeetCode-37--解数独(Sudoku-Solver)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-e33380eeceea8a08.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [37\. 解数独](https://leetcode-cn.com/problems/sudoku-solver/)

编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需**遵循如下规则**：

1.  数字 `1-9` 在每一行只能出现一次。

2.  数字 `1-9` 在每一列只能出现一次。

3.  数字 `1-9` 在每一个以粗实线分隔的 `3x3` 宫内只能出现一次。

空白格用 `'.'` 表示。

![image](http://upload-images.jianshu.io/upload_images/16846478-5bad62255721830c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

一个数独。

![image](http://upload-images.jianshu.io/upload_images/16846478-0fd0666471d8fed8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

答案被标成红色。

**Note:**

*   给定的数独序列只包含数字 `1-9` 和字符 `'.'` 。

*   你可以假设给定的数独只有唯一解。

*   给定数独永远是 `9x9` 形式的。

## Python3实现
### DFS无优化版

```java
/*
 * @author:leacoder
 * @des: DFS 无优化版 解数独 
 */

class Solution {
    public void solveSudoku(char[][] board) {
        if(board == null || board.length == 0) return;
        solve_DFS(board);
    }
    
    public boolean solve_DFS(char[][] board){
        for ( int y = 0; y < board.length; y++){
            for( int x = 0; x < board[y].length; x++){ //遍历数独每个格子
                if( board[y][x] == '.'){  // 判断是否为空
                    for( char c = '1'; c <= '9'; c++){ // 遍历 1 - 9 数字 是否可行 ,ASCII 中 字符 1 - 9连续
                        if( isValid(board, y, x, c) ){  // 是否可填 c
                            board[y][x] = c; // 填入 然后 DFS 判断 是否正确
                            if(solve_DFS(board)){
                                return true; // ok 成功  正确
                            }
                            else{ //失败  不正确
                                board[y][x] = '.'; //重新标记为空白 不填
                            }          
                        }
                    }
                    return false;  // 1 - 9 没有数能填入  失败
                }
            }
        }
        
        return true;
    }
    public boolean isValid(char[][] board,int row,int col, char c){ // 可填校验
        for(int i = 0; i < 9; i++){
            
            if(board[i][col] !='.' && board[i][col] == c){ // 列检测
                return false; // 检查 每一行  中 col 位是否合法  不能已存在 c
            }
            if(board[row][i] !='.' && board[row][i] == c) {//  行检测
                return false; // 检查 每一列 中 row 位是否合法  不能已存在 c
            }
            if(board[3 * (row/3) + i/3][3 * (col/3) + i%3] != '.' && board[3 * (row/3) + i/3][3 * (col/3) + i%3] == c){
                return false;  // 小 3x3 宫内检测
            }
        }
            
        return true; // 均检测通过 
    }
    
}
```

###  DFS 优化版

ToDo

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
