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
});