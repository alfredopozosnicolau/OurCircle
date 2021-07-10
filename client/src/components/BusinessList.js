import React from 'react'
import BusinessDetails from './BusinessDetails'
import '../styles/BusinessList.css';
import { Link } from 'react-router-dom';

const BusinessList = ({ business }) => {
    
    const [showBusinessDetails, setShowBusinessDetails] = React.useState(false)

    const handleClick = () => 
        setShowBusinessDetails(!showBusinessDetails)
    return (
            <div className='flexbox-item flexbox-item-1'>
                <h3>
                    {business.name}
                </h3>
                <Link to={`/business/${business.id}`}>
                    <img title='flex-img' data-title="Click for more info" src={(business.imgFile)} onClick={handleClick} />
                    { showBusinessDetails ? <BusinessDetails business={business} /> : null}
                    <p>{business.type}</p>
                </Link>
            </div>
    )
}

export default BusinessList
