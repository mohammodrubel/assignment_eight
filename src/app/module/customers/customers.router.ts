import { Router } from "express";
import { CustomerController } from "./customers.controller";

const router = Router();

router.post('/', CustomerController.createCustomer);
router.get('/', CustomerController.getAllCustomer);
router.get('/:id', CustomerController.getSingleCustomer);
router.patch('/:id', CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);


export const customersRouter = router;
