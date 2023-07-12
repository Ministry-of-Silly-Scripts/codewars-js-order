const order = (words) => {
  if (words.length === 0) return ""

  let words_split = words.split(" ")
  let out_array = new Array(words_split).fill("")

  for (let i = 0; i < words_split.length; i++) {
    pos = wordPos(words_split[i]) - 1;
    out_array[pos] = words_split[i]
  }

  return out_array.join(" ") 
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
