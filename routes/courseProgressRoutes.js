"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseProgressController_1 = require("../controller/courseProgressController");
const router = express_1.default.Router();
router.get("/getProgressCourseModule/:id", courseProgressController_1.getProgressCourseModule);
router.get("/getProgressModuleTopic/:id", courseProgressController_1.getProgressModuleTopic);
router.get("/getTrackedCourse/:id", courseProgressController_1.getTrackedCourse);
router.post("/updateTopicStatus", courseProgressController_1.updateTopicStatus);
router.post("/updateModuleStatus", courseProgressController_1.updateModuleStatus);
router.post("/updateModuleCompeletedStatus", courseProgressController_1.updateModuleCompeletedStatus);
router.post("/enrolledUserProgressDefault", courseProgressController_1.enrolledUserProgressDefault);
router.post("/updateTopicsCompleted", courseProgressController_1.updateTopicsCompleted);
router.get("/getAllTopicsCompleted/:id", courseProgressController_1.getAllTopicsCompleted);
router.post("/courseProgressTopic", courseProgressController_1.courseProgressTopic);
exports.default = router;
