import { driverType } from '../../types/types'
import DriversGallery from '../DriverGallery/DriversGallery'
import './FilterableDriversGallery.css'

type Props = {
    drivers: driverType []
}
function FilterableDriversGallery({drivers}: Props) {
    // const [filterText, setFilterText] = useState('');
    // const [isAvailable, setInStockOnly] = useState(false);


    return (
        <>
            <h3 className='Our Drivers'>Our Drivers</h3>
            <section className='drivers'>
                <DriversGallery drivers={drivers} />
            </section>
        </>
    )
}

export default FilterableDriversGallery