import express, { Request, Response, NextFunction} from "express";
import "express-async-errors"

import { Routes } from "./routes";
const routes = new Routes();

const app = express();

app.use(express.json());
app.use(routes.UserRoutes);
app.use(routes.CategoryRoutes);
app.use(routes.ProductRoutes);
app.use(routes.SaleRoutes);

app.use(
    (err:Error,request:Request,response:Response,next:NextFunction) => {
        if(err){
            return response.status(400).json({
                error:err.message
            })
        }

        return response.status(500).json({
            status:'ERROR',
            message: 'Internal Server Error'
        });
    }
)

app.listen(3000);