const leftToRight = {
  "{": "}",
  "[": "]",
  "(": ")",
}

const isValid = (s) => {
  if (!s) return true
  const stack = []
  const len = s.length
  for (let i = 0; i < len; i++) {
    const ch = s[i]
    if (["{", "[", "("].includes(ch)) {
      stack.push(leftToRight[ch])
    } else {
      if (!stack.length || stack.pop() !== ch) {
        return false
      }
    }
  }
  return !stack.length
}