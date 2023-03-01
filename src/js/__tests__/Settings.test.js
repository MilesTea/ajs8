import Settings from '../Settings';

test('testing settings on default settings', () => {
  const testSettings = new Settings();
  const ExpectedResult = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(testSettings.settings).toEqual(ExpectedResult);
});

test('testing settings with custom settings', () => {
  const testSettings = new Settings();
  testSettings.setSetting('difficulty', 'hard');
  const ExpectedResult = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'hard'],
  ]);
  expect(testSettings.settings).toEqual(ExpectedResult);
});
