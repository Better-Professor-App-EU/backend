const db = require('../../config/db-config');

const Projects = require('./projects-model');

beforeAll(async () => {
  // await db('Messages').truncate();
  // await db('ProjectsToDeadlines').truncate();
  // await db('Students&Projects').truncate();
  // await db('Users&Students').truncate();
  
  // await db('Projects').truncate();
});

describe('projects-model', () => {
//   describe('add(project)', () => {
//     it('should insert the provided project into the db and return it', async () => {
//       const projectsBefore = await db('Projects');
      
//       const project1 = await Projects.add({ name: "testProject1" });
//       const project2 = await Projects.add({ name: "testProject2" });

//       const projectsAfter = await db('Projects');
//       expect(projectsAfter).toHaveLength(projectsBefore.length + 2);
//       expect(project1).toEqual({ id: 1, name: "testProject1" });
//       expect(project2).toEqual({ id: 2, name: "testProject2" });
//     });

//     it('should throw if provided student is badly formed', async () => {
//       try {
//         await Projects.add({ nam: "badStudent" });
//       } catch(err) {
//         expect(err.message).toEqual("insert into `Projects` (`nam`) values ('badStudent') - SQLITE_ERROR: table Projects has no column named nam");
//       }
//     });
//   });

//   describe('find()', () => {
//     it('should return an array of projects', async () => {
//       const projects = await Projects.find();
//       expect(Array.isArray(projects)).toBe(true);
//       expect(projects[0]).toEqual({ id: 1, name: "testProject1" });
//       expect(projects[1]).toEqual({ id: 2, name: "testProject2" });
//     });
//   });

//   describe('findById(id)', () => {
//     it('should return the project with the given id', async () => {
//       const project1 = await Projects.findById(1);
//       const project2 = await Projects.findById(2);

//       expect(project1).toEqual({ id: 1, name: "testProject1" });
//       expect(project2).toEqual({ id: 2, name: "testProject2" });
//     });

//     it('should return _undefined_ if the given id is invalid', async () => {
//       const project = await Projects.findById(3);
//       expect(project).toEqual(undefined);
//     });
//   });

//   describe('findDeadlines(student_id)', () => {
//     it('should return an array of deadlines associated with the given student_id', async () => {
//       const testDeadline1 = {project_id: 1, deadline_type: 'testType1', deadline: JSON.stringify(new Date('2030-01-01'))};
//       const testDeadline2 = {project_id: 1, deadline_type: 'testType2', deadline: JSON.stringify(new Date('2020-01-02'))};
//       await db('ProjectsToDeadlines').insert(testDeadline1);
//       await db('ProjectsToDeadlines').insert(testDeadline2);
//       await db('Students').insert({ name: 'testStudent1' });
//       await db('Students&Projects').insert({ student_id: 1, project_id: 1 });

//       let deadlines = await Projects.findDeadlines(1);
//       expect(Array.isArray(deadlines)).toBe(true);
//       expect(deadlines).toHaveLength(3);

//       // To make sure later tests aren't broken:
//       await db('Students&Projects').truncate();
//       await db('Students').truncate();
//       await db('ProjectsToDeadlines').truncate();
//     });
//   });

// //   describe('findProjectsById(id)', () => {
// //     it('should return an array of projects associated with the given id', async () => {
// //       await db('Projects').insert({ name: 'testProject1' });
// //       await db('Projects').insert({ name: 'testProject2' });
// //       await db('Students&Projects').insert({ student_id: 1, project_id: 1 });
// //       await db('Students&Projects').insert({ student_id: 1, project_id: 2 });

// //       const projects = await Students.findProjectsById(1);
// //       expect(Array.isArray(projects)).toBe(true);
// //       expect(projects).toHaveLength(2);
// //       expect(projects[0]).toEqual({ id: 1, name: 'testProject1' });

// //       // To ensure the next test doesn't break foreign key constraints:
// //       await db('Students&Projects').truncate();
// //       await db('Projects').truncate(); // (<-- And for tidiness!)
// //     });

// //     it('should return an empty array if the given id is invalid', async () => {
// //       const student = await Students.findProjectsById(3);
// //       expect(student).toEqual([]);
// //     });
// //   });

//   describe('remove(id)', () => {
//     it('should remove and return the project with the given id', async () => {
//       let projects = await db('Projects');
//       expect(projects).toHaveLength(2);
      
//       const project1 = await Projects.remove(1);
//       const project2 = await Projects.remove(2);
      
//       expect(project1).toEqual({ id: 1, name: "testProject1" });
//       expect(project2).toEqual({ id: 2, name: "testProject2" });
      
//       projects = await db('Projects');
//       expect(projects).toHaveLength(0);
//     });
    
//     it('should return _undefined_ if an invalid id is supplied', async () => {
//       const project = await Projects.remove(3);
//       expect(project).toEqual(undefined);
//     });
  
//     it('should do nothing to the db if an invalid id is supplied', async () => {
//       const projectsBefore = await db('Projects');
//       await Projects.remove(3);
//       const projectsAfter = await db('Projects');
  
//       expect(projectsBefore.length).toEqual(projectsAfter.length);
//     });
//   });
});