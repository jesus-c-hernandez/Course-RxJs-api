import { Request, Response } from 'express';
import { COURSES } from '../db/db-data';
import { Course } from '../interfaces/course.interface';

export function getAllCourses(req: Request, res: Response) {
  // console.log('ERROR loading courses!');
  // res.status(500).json({ message: 'random error occurred.' });
  // return;

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(COURSES) });
  }, 1500);
}

export function getCourseById(req: Request, res: Response) {
  const courseId = parseInt(req.params['id']);

  const courses: Course[] = Object.values(COURSES);

  const course = courses.find((c: Course) => c.id === courseId);

  res.status(200).json(course);
}

export function saveCourse(req: Request, res: Response) {
  // console.log('ERROR saving course!');
  // res.sendStatus(500);
  // return;

  const id = req.params['id'],
    changes = req.body;

  console.log('Saving course changes', id, JSON.stringify(changes));

  const newCourse = {
    ...COURSES[id],
    ...changes,
  };

  COURSES[id] = newCourse;

  console.log('new course version', newCourse);

  setTimeout(() => {
    res.status(200).json(COURSES[id]);
  }, 2000);
}
