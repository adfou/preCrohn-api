import winston from 'winston';

// Define custom logging format
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create a logger instance
const logger = winston.createLogger({
    level: 'info', // Adjust the logging level as needed
    format: winston.format.combine(
        winston.format.timestamp(),
        logFormat
    ),
    transports: [
        // Log to console
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        // Optionally log to a file
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

export default logger;
