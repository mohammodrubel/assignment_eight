import { Bike } from "../../../generated/prisma";
import { prisma } from "../../shared/prisma";

const bikeAddedService = async (data:Bike)=>{
    const customers = await prisma.customer.findUniqueOrThrow(
        {
            where:{
                customerId:data.customerId 
            }
        }
    )
    if(!customers){
        throw new Error("No customers found")
    }
    const rueslt = await prisma.bike.create(
        {
            data:data 
        }
    )
    return rueslt
}

const getAllAddedBike = async()=> {
        const reuslt = await prisma.bike.findMany()
        return reuslt
}

const getsingleBike = async (id:string)=>{
    const result = await prisma.bike.findUniqueOrThrow({where:{bikeId:id}})
    return result
}


export const BikeService = {
    bikeAddedService,
    getAllAddedBike,
    getsingleBike
}