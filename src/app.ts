import  express  from "express";
import "reflect-metadata";
import "express-async-errors";
import { errorMiddleware } from "./middlewares/error/error.middleware";
import { PrismaClient } from "@prisma/client"
import authRoutes from "./routes/auth.routes";
import managerRoutes from "./routes/manager.routes";
import userRoutes from "./routes/user.routes";

export const prisma = new PrismaClient()

const app = express();

app.use(express.json());

app.use("/auth", authRoutes)

app.use("/manager", managerRoutes)

app.use("/user", userRoutes)

app.use(errorMiddleware)

export default app;