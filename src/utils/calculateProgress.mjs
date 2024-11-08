export function  calculateProgress(formData) {
    let completionPercentage = 0;

    try {
        // Parse formData if it's a JSON string
        const data = typeof formData === 'string' ? JSON.parse(formData) : formData;

        // Check if parsed data is an object
        if (typeof data === 'object' && data !== null) {
            const length = Object.keys(data).length;
            completionPercentage = Math.floor((length / 12) * 100);
        }
    } catch (error) {
        // If parsing fails or other error occurs, default to 0
        completionPercentage = 0;
    }

    return completionPercentage;
}
