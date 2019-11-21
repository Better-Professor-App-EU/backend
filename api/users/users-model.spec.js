const db = require('../../config/db-config');

const Users = require('./users-model');

beforeAll(async () => {
  await db('Users').truncate();
});

describe('users-model', () => {
  describe('add(user)', () => {
    it('should insert the provided user into the db and return it', async () => {
      const usersBefore = await db('Users');
      
      const user1 = await Users.add({ username: "testUser1", password: "1234" });
      const user2 = await Users.add({ username: "testUser2", password: "1234" });

      const usersAfter = await db('Users');
      expect(usersAfter).toHaveLength(usersBefore.length + 2);
      expect(user1).toEqual({ id: 1, username: "testUser1", password: "1234" });
      expect(user2).toEqual({ id: 2, username: "testUser2", password: "1234" });
    });

    it('should throw if provided user is badly formed', async () => {
      try {
        await Users.add({ name: "badUser" });
      } catch(err) {
        expect(err.message).toEqual("insert into `Users` (`name`) values ('badUser') - SQLITE_ERROR: table Users has no column named name");
      }
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

    it('should throw if provided filter is badly formed', async () => {
      try {
        await Users.findBy({ name: "badUser" });
      } catch(err) {
        expect(err.message).toEqual("select * from `Users` where `name` = 'badUser' limit 1 - SQLITE_ERROR: no such column: name");
      }

      try {
        await Users.findBy("testUser1");
      } catch(err) {
        expect(err.message).toEqual("The operator \"undefined\" is not permitted");
      }
    });
  });

  describe('findById(id)', () => {
    it('should return the user with the given id', async () => {
      const user1 = await Users.findById(1);
      const user2 = await Users.findById(2);

      expect(user1).toEqual({ id: 1, username: "testUser1", password: "1234" });
      expect(user2).toEqual({ id: 2, username: "testUser2", password: "1234" });
    });

    it('should return _undefined_ if the given id is invalid', async () => {
      const user = await Users.findById(3);
      expect(user).toEqual(undefined);
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
    
    it('should return _undefined_ if an invalid id is supplied', async () => {
      const user = await Users.remove(3);
      expect(user).toEqual(undefined);
    });
  
    it('should do nothing to the db if an invalid id is supplied', async () => {
      const usersBefore = await db('Users');
      await Users.remove(3);
      const usersAfter = await db('Users');
  
      expect(usersBefore.length).toEqual(usersAfter.length);
    });
  });
});