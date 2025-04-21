import { Router } from "express";
import { BikeController } from "./bikeBanagement.controller";

const router = Router()

    router.post('/',BikeController.addedBikeController)
    router.get('/',BikeController.getAllBikeController)
    router.get('/:id',BikeController.getSingleBikeController)

export const bikeRouter = router 