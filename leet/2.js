function shortestToChar(S, C) {
  const len = S.length
  const res = []
  let left
  let right
  for (let i = 0; i < len; i++) {
    left = S.indexOf(C, i)
    right = S.lastIndexOf(C, i)
    if (left > -1 && right > -1) {
      res.push(Math.min(abs(i - left), abs(i - right)))
    } else if (left > -1) {
      res.push(abs(i - left))
    } else if (right > -1) {
      res.push(abs(i - right))
    }
  }
  return res
}

function abs(n) {
  return Math.abs(n)
}

const S = "loveleetcode";
const C = 'e'
console.log(shortestToChar(S, C))