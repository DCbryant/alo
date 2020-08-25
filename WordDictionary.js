const WordDictionary = function() {
  this.words = {};
}

WordDictionary.prototype.addWord = function (word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word);
  } else {
    this.words[word.length] = [word];
  }
}

WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) return false;
  const len = word.length

  // 如果字符串中不包含‘.’，那么一定是普通字符串
  if (!word.includes(".")) {
    return this.words[len].includes(word)
  }

  // 否则就是正则表达式
  const reg = new RegExp(word);

  return this.words[len].some(word => reg.test(word))
}