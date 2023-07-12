const order = (words) => {
  if (words.length === 0) return ""
  return words;
}

const wordPos = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (!isNaN(word[i])) {
      return parseInt(word[i])
    }
  }

  return 0;
}

module.exports = {
  order,
  wordPos
};
