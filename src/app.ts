import  express  from "express";
import "reflect-metadata";
import "express-async-errors";
import { errorMiddleware } from "./middlewares/error/error.middleware";
import { PrismaClient } from "@prisma/client"
import authRouth from "./routes/auth.routes";
import managerRouth from "./routes/manager.routes";

const prisma = new PrismaClient()

const app = express();

app.use(express.json());

app.use("/auth", authRouth)

app.use("/manager", managerRouth)

app.use(errorMiddleware)

export default app;