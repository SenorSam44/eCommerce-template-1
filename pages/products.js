import React from 'react'
import {client} from '../lib/client'

const products = ({ProductImage}) => {
    return (
        <div className='Allproducts-container'>
            {ProductImage?.map(prod => (
                <ProductImage key={prod._id} allproducts={prod} />
            ))}
        </div>
      )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const ProductImage = await client.fetch(query);
  
    return {
      props: { ProductImage }
    }
}

export default products
