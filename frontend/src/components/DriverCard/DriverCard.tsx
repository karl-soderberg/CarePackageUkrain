
import { driverType } from '../../types/types'
import { Button } from '../ui/button';
import { Switch } from "@/components/ui/switch"
import './DriverCard.css';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteDriver } from '@/utils/APIcalls';


function DriverCard({driver}) {
    const queryClient = useQueryClient();
    const [isAvailable, setIsAvailable] = useState(driver.available);

    const deleteDriverMutation = useMutation(deleteDriver, {
        onSuccess: () => {
            queryClient.invalidateQueries(['drivers']);
        },
    });


    const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    };

    const handleDelete = async () => {
        try {
          await deleteDriverMutation.mutateAsync(driver.id);
        } catch (error) {
          console.error('Error deleting driver:', error);
        }
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
                <Button onClick={handleDelete}>Delete</Button>
            </section>
        </article>
    </>
    )
}

export default DriverCard