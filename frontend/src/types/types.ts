export type driverType = {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    pricePerKg: string,
    city: string,
    available: boolean
}

export type driversType = {
    driver: driverType[]
}