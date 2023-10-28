import React, {Suspense} from 'react';
import Head from 'next/head';
import { Footer, Navbar } from '../components';
const LazyNavbar = React.lazy(() => import('../components/Navbar'));
const LazyFooter = React.lazy(() => import('../components/Footer'));

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Head>
            <title>Dine Market</title>
        </Head>
        <header>
            <Suspense fallback={<div>Loading Navbar...</div>}>
            <LazyNavbar/>
            </Suspense>
        </header>
        <main className='main-container'>
            <Suspense fallback={<div>Loading...</div>}>
            {children}
            </Suspense>
        </main>
        <footer>
            <Suspense fallback={<div>Loading Footer...</div>}>
                <LazyFooter />
            </Suspense>
        </footer>
    </div>
  )
}

export default Layout