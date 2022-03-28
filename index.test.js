/* 
1. Variables are in the global scope of the file. (FIXED)
2. No other tests will be executed if there is an error. (FIXED)
3. No description on which test went wrong. (FIXED)
*/

const assert = require('assert');
const { forEach, map } = require('./index');

const test = (desc, fn) => {
  console.log('----', desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

// https://nodejs.org/dist/latest-v16.x/docs/api/assert.html#assertstrictequalactual-expected-message

test('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => (sum += value));
  assert.strictEqual(sum, 6, 'Expected forEach to sum the array');
});

test('The map function', () => {
  const result = map([1, 2, 3], (value) => value * 2);

  assert.deepStrictEqual(result, [2, 4, 7]);

  assert.strictEqual(
    result[0],
    2,
    `Expected to find 2, but found ${result[0]}`
  );
  assert.strictEqual(
    result[1],
    4,
    `Expected to find 4, but found ${result[1]}`
  );
  assert.strictEqual(
    result[2],
    6,
    `Expected to find 6, but found ${result[2]}`
  );
});
