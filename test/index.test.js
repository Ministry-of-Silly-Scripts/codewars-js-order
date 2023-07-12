const { order } = require("../src/index");

test("test order", () => {
  expect(order(0)).toBe(true);
});
