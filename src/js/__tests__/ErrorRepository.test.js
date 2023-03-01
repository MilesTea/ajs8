import ErrorRepository from '../ErrorRepository';

test.each([
  [400, 'Bad Request'],
  [404, 'Not Found'],
  [418, 'I\'m a teapot'],
])('testing ErrorRepository translate function on code %i: "%s"', (code, error) => {
  const testErrorRepository = new ErrorRepository();
  expect(testErrorRepository.translate(code)).toEqual(error);
});
