"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const course_1 = __importDefault(require("./course"));
const lesson_1 = __importDefault(require("./lesson"));
const login_1 = __importDefault(require("./login"));
const router = (0, express_1.Router)();
exports.router = router;
router.use('/api/courses', course_1.default.router);
router.use('/api/lessons', lesson_1.default.router);
router.use('/api/login', login_1.default.router);
//# sourceMappingURL=index.js.map