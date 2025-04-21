import { Customer } from "../../../generated/prisma";
import { prisma } from "../../shared/prisma";

const createNewCustomer = async (data: Customer) => {
    const result = await prisma.customer.create(
        {
            data: data
        }
    )
    return result
};

const getNewCustomers = async () => {
    const reuslt = await prisma.customer.findMany()
    return reuslt
}

const getSingleCustomers = async (id: string) => {
    const result = await prisma.customer.findUnique(
        {
            where: {
                customerId: id
            }
        }
    )
    return result
}
const updateCustomers = async (id: string, data: Partial<Customer>) => {
    const result = await prisma.customer.update(
        {
            where: {
                customerId: id
            },
            data: data
        }
    )
    return result
}

const deleteCustomers = async (id: string) => {
    const result = await prisma.customer.delete(
        {
            where: {
                customerId: id
            }
        }
    )
    return result
}
export const customerService = {
    createNewCustomer,
    getNewCustomers,
    getSingleCustomers,
    updateCustomers,
    deleteCustomers
};
