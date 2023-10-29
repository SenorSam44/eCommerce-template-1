import React from 'react'
import {client} from '../lib/client'
import { ProductImage } from '../components'

const female = ({AllFemaleProducts}) => {
    return (
        <div className='Allproducts-container'>
            {AllFemaleProducts?.map(prod => (
                <ProductImage key={prod._id} product={prod} />
            ))}
        </div>
      )
}

export const getServerSideProps = async () => {
    const query = '*[category == "Female"]';
    const AllFemaleProducts = await client.fetch(query);

    return {
      props: { AllFemaleProducts }
    }
}

export default female
