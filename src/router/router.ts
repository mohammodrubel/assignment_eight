import { Router } from "express";
import { customersRouter } from "../app/module/customers/customers.router";
import { bikeRouter } from "../app/module/bikeBanagement/bikeBanagement.router";
import {serviceRouter} from '../app/module/services/services.router'

export const router = Router()


const moduleRoutes = [
    {
        path: '/customers',
        route: customersRouter
    },
    {
        path: '/bikes',
        route: bikeRouter
    },
    {
        path: '/services',
        route: serviceRouter
    },

]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router 