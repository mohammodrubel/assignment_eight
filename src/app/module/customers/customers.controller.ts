import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { customerService } from "./customers.service";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await customerService.createNewCustomer(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Customer created successfully",
        data: result
    });
});

const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await customerService.getNewCustomers();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Customers fetched successfully",
        data: result
    });
});
const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await customerService.getSingleCustomers(req?.params?.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Customer fetched successfully",
        data: result
    });
});
const updateCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await customerService.updateCustomers(req?.params?.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Customer updated successfully",
        data: result
    });
});
const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await customerService.deleteCustomers(req?.params?.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Customer deleted successfully",
        data: null
    });
});


export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer
};


