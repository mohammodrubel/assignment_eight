import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BikeService } from "./bikeBanagement.service";

const addedBikeController = catchAsync(async (req: Request, res: Response) => {
    const result = await BikeService.bikeAddedService(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Bike added successfully",
        data: result
    });
})

const getAllBikeController = catchAsync(async (req: Request, res: Response) => {
    const result = await BikeService.getAllAddedBike()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Bike fetched successfully",
        data: result
    });
})

const getSingleBikeController = catchAsync(async (req: Request, res: Response) => {
    const id = req?.params?.id
    const result = await BikeService.getsingleBike(id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "get single Bike fetched successfully",
        data: result
    });
})

export const BikeController = {
    addedBikeController,
    getSingleBikeController,
    getAllBikeController
}