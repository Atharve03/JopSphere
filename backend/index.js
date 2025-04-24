import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';  // MongoDB connection function
import userRoute from './routes/userroutes.js';
import companyRoute from './routes/companyroute.js';
import jobRoute from './routes/jobroute.js';
import applicationRoute from './routes/applicationroute.js';
import path from 'path';

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const _dirname = path.resolve();

// Allow multiple origins

const corsOptions = {
    origin:'https://jopsphere.onrender.com',
    credentials:true
}
app.use(cors(corsOptions));

// Connect to MongoDB
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use('/api/v1/application', applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist", "index.html"))
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`); 
});
