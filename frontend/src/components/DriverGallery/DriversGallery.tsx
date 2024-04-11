import { driverType } from '../../types/types'
import DriverCard from '../DriverCard/DriverCard'

type Props = {
    drivers: driverType []
}

function DriversGallery({drivers}) {
  return (
    <>
        {drivers.map((driver) =>
            <DriverCard driver={driver} />
        )}
    </>
  )
}

export default DriversGallery