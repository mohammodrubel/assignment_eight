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
exports.BikeService = void 0;
const prisma_1 = require("../../shared/prisma");
const bikeAddedService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId: data.customerId
        }
    });
    if (!customers) {
        throw new Error("No customers found");
    }
    const rueslt = yield prisma_1.prisma.bike.create({
        data: data
    });
    return rueslt;
});
const getAllAddedBike = () => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield prisma_1.prisma.bike.findMany();
    return reuslt;
});
const getsingleBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findUniqueOrThrow({ where: { bikeId: id } });
    return result;
});
exports.BikeService = {
    bikeAddedService,
    getAllAddedBike,
    getsingleBike
};
