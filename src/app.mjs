// Import all dependencies
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import { express as expressUserAgent } from 'express-useragent';
import helmet from 'helmet';
import dotenv from 'dotenv';
import DB from './Config/DBContact.mjs';
import { Routes } from './Routes/index.mjs'; // Import your REST API routes

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const httpServer = createServer(app);

// CORS options configuration
const whitelist = [
    'http://localhost:3000',    
    'http://localhost:3001',
    'https://precrohn-production.up.railway.app',
    'https://precrohns.mgh.harvard.edu/'
];

const corsOptionsDelegate = (req, callback) => {
    const corsOptions = whitelist.includes(req.header('Origin'))
        ? { origin: req.header('Origin'), credentials: true }
        : { origin: false, credentials: false };
    callback(null, corsOptions);
};

// Middleware setup
app.use(cors(corsOptionsDelegate)); // CORS configuration
app.use(cookieParser()); // Parse cookies
app.use(expressUserAgent()); // User agent parser
app.use('/images', express.static(path.join(__dirname, '../uploads'))); // Static file serving
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data
app.use(helmet({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false })); // Security headers

// API Routes
app.use('/api', Routes); // Register API routes

// Database connection and server start
(async function () {
    try {
        await DB.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // Start Server
    const PORT = process.env.PORT || 7000; // Fallback to port 7000 if PORT is not set
    httpServer.listen(PORT, () => {
        console.info(`Server is running on http://localhost:${PORT}`);
    });
})();
