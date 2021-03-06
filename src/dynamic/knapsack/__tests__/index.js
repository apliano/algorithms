const fs = require('fs');
const readline = require('readline');
const knapsack = require('../knapsack');

it('works for a small set', () => {
  const W = 6;
  const items = [
    { value: 3, weight: 4 },
    { value: 2, weight: 3 },
    { value: 4, weight: 2 },
    { value: 4, weight: 3 },
  ];

  expect(knapsack(items, W)).toEqual(8);
});

it('works for regular input file', () => {
  testFromFile('src/dynamic/knapsack/__tests__/inputs/knapsack.txt', 10000, 2493893);
});

function testFromFile(filePath, capacity, result) {
  const PATH = filePath;
  const items = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(PATH, { encoding: 'utf8' }),
    terminal: false,
  });

  rl.on('line', (row) => {
    const [value, weight] = row.split(' ').map((e) => parseInt(e));
    items.push({ value, weight });
  });

  rl.on('close', () => {
    const knapsackResult = knapsack(items, capacity);
    expect(knapsackResult).toBe(result);
  });
}
