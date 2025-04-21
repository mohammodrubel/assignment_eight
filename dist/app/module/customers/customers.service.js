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
exports.customerService = void 0;
const prisma_1 = require("../../shared/prisma");
const createNewCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.create({
        data: data
    });
    return result;
});
const getNewCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield prisma_1.prisma.customer.findMany();
    return reuslt;
});
const getSingleCustomers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id
        }
    });
    return result;
});
const updateCustomers = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.update({
        where: {
            customerId: id
        },
        data: data
    });
    return result;
});
const deleteCustomers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.delete({
        where: {
            customerId: id
        }
    });
    return result;
});
exports.customerService = {
    createNewCustomer,
    getNewCustomers,
    getSingleCustomers,
    updateCustomers,
    deleteCustomers
};
