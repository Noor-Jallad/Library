import connectDB from '../../DB/connection.js';
import { globalErrorHandler } from '../Services/errorHandling.js';
import AuthRouter from './Auth/Auth.router.js';
import UserRouter from './User/User.router.js';
import AdminRouter from './Admin/Admin.router.js';
import BookRouter from './Book/Book.router.js';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fullPath = path.join(__dirname,'../upload');

const initApp=(app,express)=>{
    connectDB();

    app.use(async(req,res,next)=>{
        // var whitelist = ['http://example1.com', 'http://example2.com']
        // var corsOptions = {
        //   origin: function (origin, callback) {
        //     if (whitelist.indexOf(origin) !== -1) {
        //       callback(null, true)
        //     } else {
        //       callback(new Error('Not allowed by CORS'))
        //     }
        //   }
        // }

        // if(!whitelist.includes(req.header('origin'))){
        //     return next(new Error('Invalid origin!!'));
        // }
        next();
    })
   
    app.use(cors());
    app.use('/upload',express.static(fullPath))
    app.use(express.json());
    app.use("/auth", AuthRouter);
    app.use('/user', UserRouter);
    app.use('/book', BookRouter);
    app.use('/admin', AdminRouter);
    
    app.use('/*', (req,res)=>{
        return res.json({messaga:"page is not found"});
    })
    //error handling middleware
    app.use(globalErrorHandler)
}
export default initApp;