const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
}

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test Suito to BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    // Best practics to clean mocks
    jest.clearAllMocks();
  });

  describe('Test to get all books', () => {
    test('should return an array of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });
  });
});
