const { tspGreedy, City } = require('../tsp_greedy');

it('works for a given set of cities', () => {
  const citiesCoords = [
    { x: 20833.3333, y: 17100.0 },
    { x: 20900.0, y: 17066.6667 },
    { x: 21300.0, y: 13016.6667 },
    { x: 21600.0, y: 14150.0 },
    { x: 21600.0, y: 14966.6667 },
    { x: 21600.0, y: 16500.0 },
    { x: 22183.3333, y: 13133.3333 },
    { x: 22583.3333, y: 14300.0 },
    { x: 22683.3333, y: 12716.6667 },
    { x: 23616.6667, y: 15866.6667 },
    { x: 23700.0, y: 15933.3333 },
    { x: 23883.3333, y: 14533.3333 },
    { x: 24166.6667, y: 13250.0 },
    { x: 25149.1667, y: 12365.8333 },
    { x: 26133.3333, y: 14500.0 },
    { x: 26150.0, y: 10550.0 },
    { x: 26283.3333, y: 12766.6667 },
    { x: 26433.3333, y: 13433.3333 },
    { x: 26550.0, y: 13850.0 },
    { x: 26733.3333, y: 11683.3333 },
    { x: 27026.1111, y: 13051.9444 },
    { x: 27096.1111, y: 13415.8333 },
    { x: 27153.6111, y: 13203.3333 },
    { x: 27166.6667, y: 9833.3333 },
    { x: 27233.3333, y: 10450.0 },
  ].map(({ x, y }) => new City(x, y));
  expect(Math.round(tspGreedy(citiesCoords))).toBe(32982);
});