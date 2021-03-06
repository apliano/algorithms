const fs = require('fs');

const sortingAlgorithms = Object.values(require('..'));

sortingAlgorithms.forEach((algorithm) => {
  describe(`🛠  Running ${algorithm.name}...`, () => {
    it('works with a null input', () => {
      expect(algorithm(null)).toEqual(null);
    });

    it('works with an empty array', () => {
      expect(algorithm([])).toEqual([]);
    });

    it('works with the array [4,3,2,1]', () => {
      expect(algorithm([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });

    it('works with the array [1,3,2,6,5,8,7,9,4]', () => {
      expect(algorithm([1, 3, 2, 6, 5, 8, 7, 9, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it.each(
      new Array(100)
        .fill(0)
        .map(() => [new Array(Math.floor(Math.random() * 200)).fill(0).map(() => Math.floor(Math.random() * 1000))])
    )('works with 100 random arrays: %p', (randomArray) => {
      expect(algorithm(randomArray)).toEqual(randomArray.sort((a, b) => a - b));
    });

    it('works with a very large array', () => {
      const INPUT_ARRAY_PATH = 'src/divide_and_conquer/lists/sorting/__tests__/inputs/large_array.txt';
      try {
        const list = fs
          .readFileSync(INPUT_ARRAY_PATH, 'utf8')
          .split('\n')
          .map((e) => parseInt(e));

        expect(algorithm(list)).toEqual(list.sort((a, b) => a - b));
      } catch (err) {
        console.error(err);
      }
    });
  });
});
