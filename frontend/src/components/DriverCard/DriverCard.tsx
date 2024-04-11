
import { driverType } from '../../types/types'
import { Button } from '../ui/button';
import { Switch } from "@/components/ui/switch"
import './DriverCard.css';
import { useState } from 'react';

type Props = {
    driver: driverType
}

function DriverCard({driver}: Props) {
    const [isAvailable, setIsAvailable] = useState(driver.available);

    const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    };
    
  return (
    <>
        <article className={`driver-card ${isAvailable ? 'available' : 'not-available'}`} >
            <section className='driver-card__section'>
                <h2>{driver.name}</h2>
                <p>City: {driver.city}</p>
                <p>Phone Number: {driver.phoneNumber}</p>
                <p>Price Per Kg: {driver.pricePerKg}</p>
                <section className='driver-available'>
                    <p>Available: {isAvailable ? 'Yes' : 'No'}</p>
                    <Switch checked={isAvailable} onClick={toggleAvailability}></Switch>
                </section>
            </section>
        </article>
    </>
    )
}

export default DriverCard