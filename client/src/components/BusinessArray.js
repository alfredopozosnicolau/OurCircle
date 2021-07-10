import React from 'react'
import BusinessList from './BusinessList'

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

export default function BusinessArray() {

    // Businesses Array
    const businesses = [
    {
      id: 1,
      name: 'Marvelous Cuts',
      type: 'Barber Shop',
      services: ['Gentleman Fade', 'Premium Haircut', 'Child Standard Cut', 'Beard Design'],
      website: 'https://www.marvelouscuts.com/',
      city: 'Brockton',
      rating: 4, 
      imgFile: marvelous_cuts
  },
  {
      id: 2,
      name: 'One Stop Auto',
      type: 'Auto Repair',
      services: ['Oil Change', 'Tire Rotation', 'Car Diagnosis'],
      website: null,
      city: 'Brockton',
      rating: 3.4,
      imgFile: one_stop_auto
  },
  {
      id: 3,
      name: 'Punch Kettlebell Gym',
      type: 'Fitness Center',
      services: ['Personal Trainer', 'Zumba Classes'],
      website: '',
      city: 'Brockton',
      rating: 4,
      imgFile: punch_kettlebell_gym
  },
  {
      id: 4,
      name: 'Khalil\'s Kitchen',
      type: 'Restaraunt',
      services: ['Dine-in', 'Take-out', 'Delivery'],
      website: 'http://khalilskitchen.net/',
      city: 'Brockton',
      rating: 4.2,
      imgFile: khalils_kitchen
  },
  {
      id: 5,
      name: 'Flex Supplements',
      type: 'Supplements and Nutrition',
      services: ['Supplements', 'Drinks', 'Lifting Gear'],
      website: null,
      city: 'South Boston',
      rating: 4.8,
      imgFile: flex_supplements
  },
  {
    id: 6,
    name: 'Gold\'s Gym',
    type: 'Fitness Center',
    services: ['Personal Trainer'],
    website: 'https://www.goldsgym.com/',
    city: 'South Boston',
    rating: 4.5,
    imgFile: golds_gym
},
{
    id: 7,
    name: 'Karma Hair Salon',
    type: 'Hair Stylist',
    services: ['Haircut', 'Hair Perm', 'Hair Dying'],
    website: null,
    city: 'Revere',
    rating: 3.8,
    imgFile: karma_hair_salon
},
{
    id: 8,
    name: 'Sally Beauty',
    type: 'Cosmetic Store',
    services: ['Hair Products', 'Cosmetic Products'],
    website: 'https://www.sallybeauty.com/',
    city: 'Revere',
    rating: 3.9,
    imgFile: sally_beauty
},
{
    id: 9,
    name: 'Clear Vision Auto Detail',
    type: 'Car Detailing',
    services: ['Car Wash', 'Ceramic Coating'],
    website: null,
    city: 'Everett',
    rating: 4,
    imgFile: clear_vision_auto_detail
}
]
    return (
        <div className='businesses-container'>
            <h1>Our Partners</h1>
            <div className='flexbox-container'>
                {businesses.map((business) => (
                <BusinessList
                key={business.id} 
                business={business}
                />
            ))}
            </div>
        </div>
        
    )
}

//export default BusinessList