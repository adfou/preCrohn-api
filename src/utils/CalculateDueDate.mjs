/**
 * Adjusts the date based on the phase and state.
 * 
 * @param {Date | string} date - The initial date.
 * @param {number} phase - The phase value (0, 1, or 2).
 * @param {string} state - The state value ("0" for open, "1" for close).
 * @returns {string} - The adjusted date as a string or an empty string if no date is returned.
 */
export function CalculateDueDate(date, phase, state) {
    if (!date) {
        return ""; // Return empty string if date is null or undefined
    }

    let parsedDate = new Date(date);

    // If the date is invalid, return "Invalid Date"
    if (isNaN(parsedDate.getTime())) {
        return "Invalid Date";
    }

    // Determine due date based on phase and state
    if (state === "0") { // Open state
        switch (phase) {
            case 0:
                return ""; // Phase 0 in open state returns empty
            case 1:
                parsedDate.setMonth(parsedDate.getMonth() + 6); // Add 6 months
                return parsedDate.toISOString().split("T")[0];
            case 2:
                return ""; // Phase 2 in open state returns empty
            default:
                return "";
        }
    } else if (state === "1") { // Close state
        switch (phase) {
            case 0:
                parsedDate.setDate(parsedDate.getDate() + 4 * 7); // Add 8 weeks
                return parsedDate.toISOString().split("T")[0];
            case 1:
                parsedDate.setMonth(parsedDate.getMonth() + 6); // Add 6 months
                return parsedDate.toISOString().split("T")[0];
            case 2:
                return ""; // Phase 2 in close state returns empty
            default:
                return "";
        }
    } else {
        return ""; // If state is neither "0" nor "1", return empty
    }
}
