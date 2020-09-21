const invertTree = root => {
  if (!root) return root

  const right = invertTree(root.right)
  const left = invertTree(root.left)

  root.right = left
  root.left = right

  return root
}