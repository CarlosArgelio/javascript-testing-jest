const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

const generateOneBook = () => ({
  _id: uuidv4(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBook = (size) => {
  const limit = size ?? 10;
  const fakeBoks = [];

  for (let i = 0; i < limit; i += 1) {
    fakeBoks.push(generateOneBook());
  }
  return [...fakeBoks];
};

module.exports = { generateOneBook, generateManyBook };
