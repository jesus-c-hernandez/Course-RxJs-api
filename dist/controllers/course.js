"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCourse = exports.getCourseById = exports.getAllCourses = void 0;
const db_data_1 = require("../db/db-data");
function getAllCourses(req, res) {
    setTimeout(() => {
        res.status(200).json({ payload: Object.values(db_data_1.COURSES) });
    }, 1500);
}
exports.getAllCourses = getAllCourses;
function getCourseById(req, res) {
    const courseId = parseInt(req.params['id']);
    const courses = Object.values(db_data_1.COURSES);
    const course = courses.find((c) => c.id === courseId);
    res.status(200).json(course);
}
exports.getCourseById = getCourseById;
function saveCourse(req, res) {
    const id = req.params['id'], changes = req.body;
    console.log('Saving course changes', id, JSON.stringify(changes));
    const newCourse = Object.assign(Object.assign({}, db_data_1.COURSES[id]), changes);
    db_data_1.COURSES[id] = newCourse;
    console.log('new course version', newCourse);
    setTimeout(() => {
        res.status(200).json(db_data_1.COURSES[id]);
    }, 2000);
}
exports.saveCourse = saveCourse;
//# sourceMappingURL=course.js.map