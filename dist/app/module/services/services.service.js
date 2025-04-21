"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecord = void 0;
const prisma_1 = require("../../shared/prisma");
const createServiceRecord = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isBikeExist = yield prisma_1.prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: data.bikeId
        }
    });
    if (!isBikeExist) {
        throw new Error("bikeId is not found");
    }
    const result = yield prisma_1.prisma.service.create({
        data: data
    });
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.service.findMany();
    return result;
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield prisma_1.prisma.service.findUniqueOrThrow({ where: { serviceId: id } });
    return reuslt;
});
const updateService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.service.update({
        where: {
            serviceId: id
        },
        data: data
    });
    return result;
});
const olderServiceSevenDays = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    console.log(sevenDaysAgo);
    const services = yield prisma_1.prisma.service.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return services;
});
exports.ServiceRecord = {
    createServiceRecord,
    getAllService,
    getSingleService,
    updateService,
    olderServiceSevenDays
};
