import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import globalErrorHandeler from './app/middlewares/globalErrorHandeler'
import httpStatus from 'http-status'
import router from './router/router'

const app: Application = express()
app.use(cors())
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send("server is running")
})

app.use(`/api`, router)
app.use(globalErrorHandeler)
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message:"Api Not FOUND",
        error:{
            path:req?.originalUrl,
            message:"your request path is not found"
        }
    })
})
export default app