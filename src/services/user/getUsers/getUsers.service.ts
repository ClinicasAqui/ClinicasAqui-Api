import { prisma } from "../../../app";

interface IUserResponse {
    age: number;
    avatar: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    id: string;
    isVerify: boolean;
    isActive: boolean;
    healthPlanName?: null | string
    isAdm: boolean;
}

export const getUsersService = async () => {
    const userResponse: IUserResponse[] = []
    const users = prisma.users.findMany({})
    ;(await users).map(elem => {
        const {age, avatar, email, createdAt, isActive, updatedAt, name, id, isVerify, healthPlanName, isAdm} = elem
        return userResponse.push({id, name, email, age, avatar, healthPlanName, isActive, isVerify,  isAdm, createdAt, updatedAt})
    })

    return userResponse
}