/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js';
import authRoutes from './routes/user-auth.js';
import cookieParser from 'cookie-parser';
import path from 'path';



dotenv.config('');

const __dirname = path.resolve();


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDb Connected successfully');
})
.catch((err)=>{
    console.log(err);
});
const app= express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log('Server is listing on port 3000')
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message= err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});