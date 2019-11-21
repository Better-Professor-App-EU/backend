const db = require('../../config/db-config');

const Users = require('./users-model');

beforeAll(async () => {
  await db('Users').truncate();
});

describe('users-model', () => {
  describe('add(user)', () => {
    it('should insert the provided user into the db', async () => {
      const usersBefore = await db('Users');
      
      await Users.add({ username: "testUser1", password: "1234" });
      await Users.add({ username: "testUser2", password: "1234" });

      const usersAfter = await db('Users');
      expect(usersAfter).toHaveLength(usersBefore.length + 2);
    });
  });

  describe('find()', () => {
    it('should return an array of users', async () => {
      const users = await Users.find();
      expect(Array.isArray(users)).toBe(true);
      expect(users[0]).toEqual({ id: 1, username: "testUser1", password: "1234" });
      expect(users[1]).toEqual({ id: 2, username: "testUser2", password: "1234" });
    });
  });

  describe('findBy(filter)', () => {
    it('should return the first user which meets the filter criteria', async () => {
      let user = await Users.findBy({ username: "testUser1" });
      expect(user).toEqual({ id: 1, username: "testUser1", password: "1234" });
      
      user = await Users.findBy({ password: "1234" });
      expect(user).toEqual({ id: 1, username: "testUser1", password: "1234" });
    });
  });

  describe('findById(id)', () => {
    it('should return the user with the given id', async () => {
      const user1 = await Users.findById(1);
      const user2 = await Users.findById(2);

      expect(user1).toEqual({ id: 1, username: "testUser1", password: "1234" });
      expect(user2).toEqual({ id: 2, username: "testUser2", password: "1234" });
    });
  });

  describe('remove(id)', () => {
    it('should remove and return the user with the given id', async () => {
      let users = await db('Users');
      expect(users).toHaveLength(2);

      const user1 = await Users.remove(1);
      const user2 = await Users.remove(2);

      expect(user1).toEqual({ id: 1, username: "testUser1", password: "1234" });
      expect(user2).toEqual({ id: 2, username: "testUser2", password: "1234" });

      users = await db('Users');
      expect(users).toHaveLength(0);
    });
  });
});