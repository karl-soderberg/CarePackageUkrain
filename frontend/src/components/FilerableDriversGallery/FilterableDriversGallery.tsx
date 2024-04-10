import { driverType } from '../../types/types'
import DriversGallery from '../DriverGallery/DriversGallery'
import './FilterableDriversGallery.css'

type Props = {
    drivers: driverType [],
    selectedCity: string
}
function FilterableDriversGallery({drivers, selectedCity}: Props) {
    const filteredDrivers = selectedCity ? drivers.filter(driver => driver.city === selectedCity) : drivers;
    return (
        <>
            <h3 className='Our Drivers'>Our Drivers</h3>
            <section className='drivers'>
                <DriversGallery drivers={filteredDrivers} />
            </section>
        </>
    )
}

export default FilterableDriversGallery