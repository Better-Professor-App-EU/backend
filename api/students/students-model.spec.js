const db = require('../../config/db-config');

const Students = require('./students-model');

beforeAll(async () => {
  await db('Students&Projects').truncate();
  await db('Students').truncate();
});

describe('students-model', () => {
  describe('add(student)', () => {
    it('should insert the provided student into the db and return it', async () => {
      const studentsBefore = await db('Students');
      
      const student1 = await Students.add({ name: "testStudent1" });
      const student2 = await Students.add({ name: "testStudent2" });

      const studentsAfter = await db('Students');
      expect(studentsAfter).toHaveLength(studentsBefore.length + 2);
      expect(student1).toEqual({ id: 1, name: "testStudent1" });
      expect(student2).toEqual({ id: 2, name: "testStudent2" });
    });

    it('should throw if provided student is badly formed', async () => {
      try {
        await Students.add({ nam: "badStudent" });
      } catch(err) {
        expect(err.message).toEqual("insert into `Students` (`nam`) values ('badStudent') - SQLITE_ERROR: table Students has no column named nam");
      }
    });
  });

  describe('find()', () => {
    it('should return an array of students', async () => {
      const students = await Students.find();
      expect(Array.isArray(students)).toBe(true);
      expect(students[0]).toEqual({ id: 1, name: "testStudent1" });
      expect(students[1]).toEqual({ id: 2, name: "testStudent2" });
    });
  });

  describe('findById(id)', () => {
    it('should return the student with the given id', async () => {
      const student1 = await Students.findById(1);
      const student2 = await Students.findById(2);

      expect(student1).toEqual({ id: 1, name: "testStudent1" });
      expect(student2).toEqual({ id: 2, name: "testStudent2" });
    });

    it('should return _undefined_ if the given id is invalid', async () => {
      const student = await Students.findById(3);
      expect(student).toEqual(undefined);
    });
  });

  describe('findProjectsById(id)', () => {
    it('should return an array of projects associated with the given id', async () => {
      await db('Projects').insert({ name: 'testProject1' });
      await db('Projects').insert({ name: 'testProject2' });
      await db('Students&Projects').insert({ student_id: 1, project_id: 1 });
      await db('Students&Projects').insert({ student_id: 1, project_id: 2 });

      const projects = await Students.findProjectsById(1);
      expect(Array.isArray(projects)).toBe(true);
      expect(projects).toHaveLength(2);
      expect(projects[0]).toEqual({ id: 1, name: 'testProject1' });

      // To ensure the next test doesn't break foreign key constraints:
      await db('Students&Projects').truncate();
      await db('Projects').truncate(); // (<-- And for tidiness!)
    });

    it('should return an empty array if the given id is invalid', async () => {
      const student = await Students.findProjectsById(3);
      expect(student).toEqual([]);
    });
  })

  describe('remove(id)', () => {
    it('should remove and return the student with the given id', async () => {
      let students = await db('Students');
      expect(students).toHaveLength(2);
      
      const student1 = await Students.remove(1);
      const student2 = await Students.remove(2);
      
      expect(student1).toEqual({ id: 1, name: "testStudent1" });
      expect(student2).toEqual({ id: 2, name: "testStudent2" });
      
      students = await db('Students');
      expect(students).toHaveLength(0);
    });
    
    it('should return _undefined_ if an invalid id is supplied', async () => {
      const student = await Students.remove(3);
      expect(student).toEqual(undefined);
    });
  
    it('should do nothing to the db if an invalid id is supplied', async () => {
      const studentsBefore = await db('Students');
      await Students.remove(3);
      const studentsAfter = await db('Students');
  
      expect(studentsBefore.length).toEqual(studentsAfter.length);
    });
  });
});