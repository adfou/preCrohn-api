import morgan from 'morgan';

// Define a logging format
const format = ':method :url :status :response-time ms';

// Create a morgan middleware instance
const logger = morgan(format, {
    stream: {
        write: (message) => {
            // Log to console
            console.log(message.trim());
        },
    },
});

export default logger;