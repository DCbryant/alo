const numIslands = grid => {
  const moveX = [0, 1, 0, -1]
  const moveY = [1, 0, -1, 0]

  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0
  }

  let count = 0
  let row = grid.length
  let column = grid[0].length

  function dfs (grid, i, j) {
    // 如果试图探索的范围已经越界，则return
    if (i<0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
      return
    }

    // 遍历过的坑位都置0，防止反复遍历
    grid[i][j] = "0"
    // 遍历完当前的1，继续去寻找下一个1
    for(let k = 0; k < 4; k++) {
      dfs(grid, i + moveX[k], j + moveY[k])
  }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === "1") {
        // 每遇到1，就进入dfs，探索岛屿边界
        dfs(grid, i, j)
        // 每完成一个 dfs，就累加一个岛屿
        count++
      }
    }
  }

  return count
}

const cleanRoom = (robot) => {
  const boxSet = new Set();
  // 初始化机器人的朝向
  let dir = 0

  function dfs (robot, boxSet, i, j, dir) {
    // 记录当前格子的坐标
    let box = i + "i" + j
    // 如果已经打扫过，那么跳过
    if (boxSet.has(box)) {
      return
    }
    // 打扫当前这个格子
    robot.clean()
    // 记住这个格子
    boxSet.add(box)

    // 四个方向试探
    for (let k = 0; k < 4; k++) {
      // 如果接下来前进的目标方向不是障碍物（也就意味着可以打扫）
      if (robot.move()) {
        // 从当前格子出发，试探上右左下
        let x = i
        let y = j
        // 处理角度和坐标的对应关系
        switch (dir) {
          case 0:
            x = i - 1
            break;
          case 90:
            y = j + 1
            break;
          case 180:
            x = i + 1;
            break;
          case 270:
            y = j - 1;
            break;
          default:
            break;
        }
        dfs(robot, boxSet, x, y, dir)
        // 一个方向的dfs结束了，意味着撞到了南墙，此时我们需要回溯到上一个格子 
        robot.turnLeft()
        robot.turnLeft()
        robot.move()
        robot.turnRight()
        robot.turnRight()
      }
      // 转向 
      robot.turnRight() 
      dir += 90  
      dir %= 360 
    }

  }

  dfs(robot, boxSet, 0, 0, 0)
}

const merge = (intervals) => {
  const res = []
  const len = intervals.length

  if (!intervals || intervals.length === 0) return []

  // 将所有区间按照第一个元素大小排序
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  // 将第一个区间（起始元素最小的区间）推入结果数组（初始化）
  res.push(intervals[0])
  for (let i = 1; i < len; i++) {
    // 取结果数组中的最后一个元素，作为当前对比的参考
    let prev = res[res.length - 1]
    // 若满足交错关系（前一个的尾部 >= 下一个的头部）
    if (intervals[i][0] >= prev[1]) {
      prev[1] = Math.max(prev[1], intervals[i][1])
    } else {
      res.push(intervals[i])
    }
  }

  return res
}