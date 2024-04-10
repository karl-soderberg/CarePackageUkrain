export const fetchAllRequest = async () => {
    const response = await fetch(`http://localhost:5166/api/Drivers`);

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.message = await response.json();
        throw error;
    }
    const drivers = await response.json();

    return drivers;
}