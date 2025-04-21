import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { ServiceRecord } from "./services.service";
import httpStatus from "http-status";
import sendResponse from "../../shared/sendResponse";

const createNewServiceController = catchAsync(async(req:Request,res:Response)=>{
    const result = await ServiceRecord.createServiceRecord(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Service record created successfully",
        data: result
    });
})


const getAllServiceController = catchAsync(async(req:Request,res:Response)=>{
    const result = await ServiceRecord.getAllService()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service records fetched successfully",
        data: result
    });
})


const getSingleServiceController = catchAsync(async(req:Request,res:Response)=>{
    const result  = await ServiceRecord.getSingleService(req?.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message:  "Service record fetched successfully",
        data: result
    });
})

const updateServiceController = catchAsync(async(req:Request,res:Response)=>{
    const result = await ServiceRecord.updateService(req.params.id,req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service record created successfully",
        data: result
    });
})

const getSevenDaysDataServiceController = catchAsync(async(req:Request,res:Response)=>{
    const result = await  ServiceRecord.olderServiceSevenDays()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Overdue or pending services fetched successfully",
        data: result
    });
})


export const ServiceRecordController = {
    createNewServiceController,
    getAllServiceController,
    updateServiceController,
    getSingleServiceController,
    getSevenDaysDataServiceController
}