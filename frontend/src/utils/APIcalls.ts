import { driverDtoType } from "@/types/types";

export const fetchAllRequest = async (city:string) => {
    const response = await fetch(`http://localhost:5166/api/Drivers?city=${city}`);

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.message = await response.json();
        throw error;
    }
    const drivers = await response.json();

    return drivers;
}

export const PostDriver = async (driverDto: driverDtoType) => {
    try {
    const response = await fetch(`http://localhost:5166/api/drivers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(driverDto),
    });
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.message = await response.json();
        throw error;
    }
    const drivers = await response.json();
    return drivers;
    } catch (error) {
        throw new Error(`An error occurred while fetching the events: ${error.message}`);
    }
}
