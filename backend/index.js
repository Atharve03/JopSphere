import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';  // MongoDB connection function
import userRoute from './routes/userroutes.js';
import companyRoute from './routes/companyroute.js';
import jobRoute from './routes/jobroute.js';
import applicationRoute from './routes/applicationroute.js';

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Allow multiple origins
const allowedOrigins = ['http://localhost:5005', 'http://localhost:5173'];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow credentials (cookies)
};
app.use(cors(corsOptions));

// Connect to MongoDB
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use('/api/v1/application', applicationRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
