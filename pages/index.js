import React from 'react'
import {client} from '../lib/client'
import {HeroBanner, EventsBanner, Newsletter, FeaturesBanner, Product, ProductImage} from '../components'
import {Navigation, A11y, Lazy} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = ({products, all_products}) => {
    return (
        <>
            <HeroBanner/>
            <EventsBanner/>

            <div className='products-outer-container'>
                <div className='subtitle'>
                    <span>PRODUCTS</span>
                    <h2>Check What We Have</h2>
                </div>
                <Swiper
                    breakpoints={{
                        // width >= 300
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 100
                        },
                        // width >= 1000
                        1000: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        // width >= 1260
                        1260: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        }
                    }}
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation
                >
                    <div className='products-container'>
                        {products?.map(product => (
                            <SwiperSlide lazy="true">
                                <Product key={product._id} product={product}/>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>

            <FeaturesBanner/>
            {/*<Newsletter />*/}
            <div className='products-outer-container'>
                <div className='subtitle'>
                    <span>PRODUCTS</span>
                    <h2>Check What We Have</h2>
                </div>
                <div className='Allproducts-container'>
                    {all_products?.map(prod => (
                        <ProductImage key={prod._id} product={prod}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    // const bannerQuery = '*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);
    const all_products = await client.fetch(query);

    return {
        props: {products, all_products}
    }
}

export default Home