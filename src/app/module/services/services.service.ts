import { Service } from "../../../generated/prisma"
import { prisma } from "../../shared/prisma"

const createServiceRecord = async (data: Service) => {
    const isBikeExist = await prisma.bike.findUniqueOrThrow(
        {
            where: {
                bikeId: data.bikeId
            }
        }
    )

    if (!isBikeExist) {
        throw new Error("bikeId is not found")
    }

    const result = await prisma.service.create(
        {
            data: data
        }
    )
    return result
}

const getAllService = async () => {
    const result = await prisma.service.findMany()
    return result
}

const getSingleService = async (id: string) => {
    const reuslt = await prisma.service.findUniqueOrThrow({ where: { serviceId: id } })
    return reuslt
}

const updateService = async (id: string, data: Service) => {
    const result = await prisma.service.update(
        {
            where: {
                serviceId: id
            },
            data: data
        }
    )
    return result
}

const olderServiceSevenDays = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
console.log(sevenDaysAgo)
    const services = await prisma.service.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return services
};

export const ServiceRecord = {
    createServiceRecord,
    getAllService,
    getSingleService,
    updateService,
    olderServiceSevenDays
}
