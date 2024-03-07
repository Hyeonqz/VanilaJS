function duplicateCount(text) {

  const set = new Set();
  const duplicate = new Set();

  for (const char of text.toLowerCase()) {
    if (set.has(char)) {
      duplicate.add(char);
    }
    else {
      set.add(char);
    }
  }
  return duplicate.size;
}
