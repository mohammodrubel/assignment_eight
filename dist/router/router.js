"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const customers_router_1 = require("../app/module/customers/customers.router");
const bikeBanagement_router_1 = require("../app/module/bikeBanagement/bikeBanagement.router");
const services_router_1 = require("../app/module/services/services.router");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/customers',
        route: customers_router_1.customersRouter
    },
    {
        path: '/bikes',
        route: bikeBanagement_router_1.bikeRouter
    },
    {
        path: '/services',
        route: services_router_1.serviceRouter
    },
];
moduleRoutes.forEach(route => exports.router.use(route.path, route.route));
exports.default = exports.router;
