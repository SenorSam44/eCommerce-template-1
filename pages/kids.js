import React from 'react'
import {client} from '../lib/client'
import { ProductImage } from '../components'

const kids = ({AllKidsProducts}) => {
    return (
        <div className='Allproducts-container'>
            {AllKidsProducts ?.map(prod => (
                <ProductImage key={prod._id} product={prod} />
            ))}
        </div>
      )
}

export const getServerSideProps = async () => {
    const query = '*[category == "Kids"]';
    const AllKidsProducts = await client.fetch(query);

    return {
      props: { AllKidsProducts }
    }
}

export default kids
