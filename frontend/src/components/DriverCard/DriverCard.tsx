
import { driverType } from '../../types/types'
// import { Switch } from "@/components/ui/switch"
import './DriverCard.css';
import { useState } from 'react';

type Props = {
    driver: driverType
}

function DriverCard({driver}: Props) {
    const [isAvailable, setIsAvailable] = useState(driver.available);

    const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    }
    
  return (
    <>
        <article className={`driver-card ${isAvailable ? 'available' : 'not-available'}`} >
            <h3>{driver.name}</h3>
            <p>Phone Number: {driver.phoneNumber}</p>
            <p>Price Per Kg: {driver.pricePerKg}</p>
            <p>Available: {driver.available ? 'Yes' : 'No'}</p>
            {/* <Switch /> */}
            <button onClick={toggleAvailability} >
                {isAvailable ? 'Set Not Available' : 'Set Available'}
            </button>
        </article>
    </>
    )
}

export default DriverCard