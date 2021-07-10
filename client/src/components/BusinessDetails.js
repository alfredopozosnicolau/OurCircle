import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

// Images
import marvelous_cuts from '../images/marvelous_cuts.jpg'
import one_stop_auto from '../images/one_stop_auto.png'
import punch_kettlebell_gym from '../images/punch_kettlebell_gym.jpg'
import khalils_kitchen from '../images/khalils_kitchen.png'
import flex_supplements from '../images/flex_supplements.jpg'
import golds_gym from '../images/golds_gym.jpg'
import karma_hair_salon from '../images/karma_hair_salon.jpg'
import sally_beauty from '../images/sally_beauty.jpg'
import clear_vision_auto_detail from '../images/clear_vision_auto_detail.png'

    // Businesses Array
    const businesses = [
        {
          _id: 1,
          name: 'Marvelous Cuts',
          type: 'Barber Shop',
          services: ['Gentleman Fade', 'Premium Haircut', 'Child Standard Cut', 'Beard Design'],
          website: 'https://www.marvelouscuts.com/',
          city: 'Brockton',
          rating: 4, 
          imgFile: marvelous_cuts
      },
      {
          _id: 2,
          name: 'One Stop Auto',
          type: 'Auto Repair',
          services: ['Oil Change', 'Tire Rotation', 'Car Diagnosis'],
          website: null,
          city: 'Brockton',
          rating: 3.4,
          imgFile: one_stop_auto
      },
      {
          _id: 3,
          name: 'Punch Kettlebell Gym',
          type: 'Fitness Center',
          services: ['Personal Trainer', 'Zumba Classes'],
          website: '',
          city: 'Brockton',
          rating: 4,
          imgFile: punch_kettlebell_gym,
          deals: [
              {
                  name:'Buy a membership and get a 15% off a supplement',
                  id: 5
              }
          ]
      },
      {
          _id: 4,
          name: 'Khalil\'s Kitchen',
          type: 'Restaraunt',
          services: ['Dine-in', 'Take-out', 'Delivery'],
          website: 'http://khalilskitchen.net/',
          city: 'Brockton',
          rating: 4.2,
          imgFile: khalils_kitchen
      },
      {
          _id: 5,
          name: 'Flex Supplments',
          type: 'Supplements and Nutrition',
          services: ['Supplements', 'Drinks', 'Lifting Gear'],
          website: null,
          city: 'South Boston',
          rating: 4.8,
          imgFile: flex_supplements,
          deals: [
            {
                name:'Spend 50 or more and get a 15% off your first month membership at Gold\'s Gym',
                id: 6
            },
            {
                name:'Spend 50 or more and get a 15% off your first month membership at Punch Kettlebell Gym',
                id: 3
            }
        ]
      },
      {
        _id: 6,
        name: 'Gold\'s Gym',
        type: 'Fitness Center',
        services: ['Personal Trainer'],
        website: 'https://www.goldsgym.com/',
        city: 'South Boston',
        rating: 4.5,
        imgFile: golds_gym,
        deals: [
            {
                name:'Buy a membership and get a 15% off a supplement at flex supplements',
                id: 5
            }
        ]
    },
    {
        _id: 7,
        name: 'Karma Hair Salon',
        type: 'Hair Stylist',
        services: ['Haircut', 'Hair Perm', 'Hair Dying'],
        website: null,
        city: 'Revere',
        rating: 3.8,
        imgFile: karma_hair_salon,
        deals: [
            {
                name:'Get a blowout and get a 15% off at Sally Beauty',
                id: 8
            }
        ]
    },
    {
        _id: 8,
        name: 'Sally Beauty',
        type: 'Cosmetic Store',
        services: ['Hair Products', 'Cosmetic Products'],
        website: 'https://www.sallybeauty.com/',
        city: 'Revere',
        rating: 3.9,
        imgFile: sally_beauty
    },
    {
        _id: 9,
        name: 'Clear Vision Auto Detail',
        type: 'Car Detailing',
        services: ['Car Wash', 'Ceramic Coating'],
        website: null,
        city: 'Everett',
        rating: 4,
        imgFile: clear_vision_auto_detail
    }]


const container = {
    display: 'inline-grid',
    gridGap: '14px',
    padding: '20px',
    background: 'white',
    margin: '10px auto',
    width: 'fit-content',
    boxShadow:' 0 0 9px #00000099',
    borderRadius: '8px'

}

const BusinessDetails = () => {
    let { id } = useParams();
    const [business, setBusiness] = useState(null)
    useEffect(()=>{
        const num = Number(id);
        if (Number.isInteger(num) && num >= 0){
            const businessFound = businesses.find(business=>business._id === num)
            setBusiness(businessFound?businessFound:null)
        }else{
            setBusiness(null)
        }
    }, [id])


    if(business === null){
        return <div> That business does not exist</div>
    }
    return (
        <div>
        <div style={{...container, display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
            <img src={business.imgFile} style={{maxWidth:'600px', margin:10 }} />
            <div style={{alignSelf:'center'}}>
                <h3>
                    {business.name}
                </h3>
                <p>
                    Services: {business.services.map(service => service + ", ")}
                </p>
                <p>
                    Located in: {business.city}
                </p>
                <p>
                    Rating: {business.rating}
                </p>
                <p>
                    {business.website !== null? <a href={business.website}>{business.website}</a>: ''}
                </p>
            </div>
        </div>
        <Deals deals={Array.isArray(business.deals)? business.deals: []} />

        </div>
    )
}

const Deals = ({ deals }) => {
    return (
        <div >
            <h3>
                Deals
            </h3>
            <div>
                {deals.map(deal=>(
                    <Link to={`/business/${deal.id}`} style={{display:'block'}}>
                        {deal.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BusinessDetails