import { Router } from "express";
import { ServiceRecordController } from "./services.controller";

const router = Router()

router.post('/', ServiceRecordController.createNewServiceController)
router.get('/', ServiceRecordController.getAllServiceController)
router.get('/status', ServiceRecordController.getSevenDaysDataServiceController)
router.get('/:id', ServiceRecordController.getSingleServiceController)
router.patch('/:id', ServiceRecordController.updateServiceController)



export const serviceRouter = router