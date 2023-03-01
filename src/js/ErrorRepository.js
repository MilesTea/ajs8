class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorised'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [418, 'I\'m a teapot'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}

export default ErrorRepository;
