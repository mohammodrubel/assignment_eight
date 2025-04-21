"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponce = (res, josnData) => {
    res.status(josnData.statusCode).json({
        success: true,
        message: josnData.message || undefined,
        meta: josnData.meta || null || undefined,
        data: josnData.data || null || undefined,
    });
};
exports.default = sendResponce;
