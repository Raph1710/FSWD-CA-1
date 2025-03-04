//eslint-disable-next-line
import {React} from 'react';

const ServiceCard = (services) => {
    return(
        <div>
            {services.title}
            {services.description}
        </div>
    )
}
export default ServiceCard