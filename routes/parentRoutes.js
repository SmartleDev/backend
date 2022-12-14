"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parentController_1 = require("../controller/parentController");
const router = express_1.default.Router();
router.get("/parent", parentController_1.getAllParents);
router.post("/setparentinfo", parentController_1.setParentInfo);
router.post("/updateparent", parentController_1.updateParent);
exports.default = router;
