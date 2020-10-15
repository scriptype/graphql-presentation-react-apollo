import { capitalize } from './utils';

test('capitalize', () => {
  expect(capitalize('lorem')).toBe('Lorem');
  expect(capitalize('l')).toBe('L');
  expect(capitalize('')).toBe('');
});
