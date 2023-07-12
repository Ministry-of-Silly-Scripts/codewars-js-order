const { order, wordPos } = require("../src/index");

describe('the order canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('order', () => {
  it('should return "" for input ""', () => {
    expect(order("")).toBe("");
  });

  it('should return "Word1" for input "Word1"', () => {
    expect(order("Word1")).toBe("Word1");
  });

  it('should return "Word1 Word2" for input "Word1 Word2"', () => {
    expect(order("Word1 Word2")).toBe("Word1 Word2");
  });

  it('should return "Word1 Word2" for input "Word2 Word1"', () => {
    expect(order("Word2 Word1")).toBe("Word1 Word2");
  });

  it('should return "Fo1r the2 g3ood 4of th5e pe6ople" for input "4of Fo1r pe6ople g3ood th5e the2"', () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople");
  });
});

describe('wordPos', () => {
  it('it should return the number embedded in the string as integer', () => {
    expect(wordPos("Word1")).toBe(1);
  });
});