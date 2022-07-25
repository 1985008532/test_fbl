const Test = require("../index.js")

test("测试数组加法", () => {
  const jtTest = Test.create({})
  jtTest.log(`paste`, 1)
  expect(jtTest.add([1,2])).toBe(3);
});