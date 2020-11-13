
// [1,2]
function plusOne (digits) {
  const len = digits.length
  let plus = 1;
  for (let i = len - 1; i > -1; i--) {
    const current = digits[i] + plus;
    digits[i] = current % 10
    plus = current > 9 ? 1 : 0
  }
  if (plus === 1) {
    digits.unshift(1)
  }
  return digits
}

console.log(plusOne([9, 9]))