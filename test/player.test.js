const player = require('../calculate.js');
const expect = require('chai').expect;

describe('Player heights', function () {
  describe('Validating input default', function () {
    it('Returning values for default user input (139)', async function () {
      let values = await player.getData(139);
      const expected = [
        ['Brevin Knight', 'Nate Robinson'],
        ['Nate Robinson', 'Mike Wilks'],
      ];
      expect(values).deep.to.equal(expected);
    });
  });

  describe('Validating not maching values', function () {
    it('Returning values when no matches found with an user input 120', async function () {
      let values = await player.getData(120);
      const expected = 'No matches found';
      expect(values).to.equal(expected);
    });
  });

  describe('Validating main function', function () {
    it('Returning true if exist players that commit the user input (140)', async function () {
      let values = await player.getData(140);
      const expected = 1;
      expect(values.length).to.greaterThanOrEqual(expected);
    });
  });
});
