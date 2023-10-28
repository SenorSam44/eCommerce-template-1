import React from 'react'
import {client} from '../lib/client'
import { ProductImage } from '../components'

const male = ({AllMaleProducts}) => {
    return (
        <div className='Allproducts-container'>
            {AllMaleProducts?.map(prod => (
                <ProductImage key={prod._id} product={prod} />
            ))}
        </div>
      )
}

export const getServerSideProps = async () => {
    const query = '*[category == "Male"]';
    const AllMaleProducts = await client.fetch(query);

    return {
      props: { AllMaleProducts }
    }
}

export default male
