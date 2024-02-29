import { PrismaClient } from "@prisma/client";

interface CustomGlobal {
  prisma?: PrismaClient;
}

declare const global: CustomGlobal;

export const prisma = global.prisma || new PrismaClient();
