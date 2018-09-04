const greet = require('../lib/greet');

test('should return hello Alex', () => {
  //Arrange
  //Act
  //Assert

  let actual = greet.sayHello('Alex');
  let expectedValue = 'Hello Alex';
  expect(actual).toBe(expectedValue);
});

test('should return null with no args', () => {
  expect(greet.sayHello()).toBeNull();
})