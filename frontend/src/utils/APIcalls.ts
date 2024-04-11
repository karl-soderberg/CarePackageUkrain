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

export const deleteDriver = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:5166/api/drivers/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const error = new Error('An error occurred while deleting the driver');
            error.message = await response.json();
            throw error;
        }

        return; // If the deletion is successful, no need to return any data
    } catch (error) {
        throw new Error(`An error occurred while deleting the driver: ${error.message}`);
    }
};
export const updateDriver = async (id: string, driverDto: driverDtoType) => {
    try {
        const response = await fetch(`http://localhost:5166/api/drivers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(driverDto),
        });
        if (!response.ok) {
            const error = new Error('An error occurred while updating the driver');
            error.message = await response.json();
            throw error;
        }
    } catch (error) {
        throw new Error(`An error occurred while updating the driver: ${error.message}`);
    }
};