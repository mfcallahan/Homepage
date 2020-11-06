import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
describe('LowerCaseUrlSerializer', () => {
  xit('should parse url string', () => {
    // Arrange
    const url =
      'https://medium.com/imvikaskohli/?random=01ngABHgO1jzuuvEces/h b3eth/2mBSraHEQ2cyFkRTYd2mo /pVmTLwIhkny8wCHFdoKYJ6apQgxDGxZ7M4Q=';
    const lowerCaseUrlSerializer = new LowerCaseUrlSerializer();

    // Act
    const urlTree = lowerCaseUrlSerializer.parse(url);

    // Assert
    // expect(1).toBe(1);
  });
});
