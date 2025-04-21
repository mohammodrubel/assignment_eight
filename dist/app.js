"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandeler_1 = __importDefault(require("./app/middlewares/globalErrorHandeler"));
const http_status_1 = __importDefault(require("http-status"));
const router_1 = __importDefault(require("./router/router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("server is running");
});
app.use(`/api/v1`, router_1.default);
app.use(globalErrorHandeler_1.default);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Api Not FOUND",
        error: {
            path: req === null || req === void 0 ? void 0 : req.originalUrl,
            message: "your request path is not found"
        }
    });
});
exports.default = app;
