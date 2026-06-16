import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit {
//     async onModuleInit() {
//         await this.$connect();
//     }
// }
@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaMariaDb({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            port: 3306,
            connectionLimit: 5,
        });

        super({ adapter });
    }
}