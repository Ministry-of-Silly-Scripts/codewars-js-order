const { order } = require("../src/index");

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
});
