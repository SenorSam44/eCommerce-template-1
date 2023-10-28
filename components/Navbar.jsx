import React, {useState} from 'react';
import Image from 'next/image';
import {CiSearch} from 'react-icons/ci';
import {CgShoppingCart} from 'react-icons/cg';
import logo from '../src/assets/Logo.png';
import Link from 'next/link';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {useStateContext} from '../context/StateContext';

const Navbar = ({Searchproducts}) => {
    const {showCart, setShowCart, totalQty} = useStateContext();
    const [toggleMenu, setToggleMenu] = useState(false);

    // Function to close the mobile drawer
    const closeMobileDrawer = () => {
        setToggleMenu(false);
    };

    // Array of navigation links
    const navLinks = [
        {href: '/female', text: 'Female'},
        {href: '/male', text: 'Male'},
        {href: "/", text: 'HomeIcon'},
        {href: '/kids', text: 'Kids'},
        {href: '/products', text: 'All Products'},
    ];

    return (
        <nav className="navbar">
            {/* Left Section */}
            <div className="left-section">
                <Link href='/'>
                    <Image src={logo} width={140} height={25} alt='logo'/>
                </Link>
            </div>

            {/* Middle Section */}
            <div className="middle-section">
                <ul className='nav-links'>
                    {navLinks.map((link) => (
                        <Link href={link.href} onClick={closeMobileDrawer} key={link.href}>
                            <li>{link.text}</li>
                        </Link>
                    ))}
                </ul>
                {/*<div className='search-bar'>*/}
                {/*    <CiSearch />*/}
                {/*    <input*/}
                {/*        type='text'*/}
                {/*        placeholder='What you looking for' />*/}
                {/*</div>*/}
                {/* onChange={(event) => {
              setSearchTerm(event.target.value);
          }} */}
            </div>

            {/* Right Section */}
            <div className="right-section">
                <div className='navbar-smallscreen'>
                    <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)}/>
                    {toggleMenu && (
                        <div className='navbar-smallscreen_overlay'>
                            <Link href='/'>
                                <Image className='logo-small' src={logo} width={140} height={25} alt='logo'/>
                            </Link>
                            <RiCloseLine color='black' fontSize={27} className='close_icon'
                                         onClick={closeMobileDrawer}/>
                            <ul className='navbar-smallscreen_links'>
                                {navLinks.map((link) => (
                                    <Link href={link.href} onClick={closeMobileDrawer} key={link.href}>
                                        <li>{link.text}</li>
                                    </Link>
                                ))}
                                <Link href='/cart' onClick={closeMobileDrawer}>
                                    <button className='cart-small-screen' onClick={() => setShowCart(false)}>
                                        <CgShoppingCart size={22}/>
                                        <span className='cart-item-qty'>{totalQty}</span>
                                    </button>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
                {showCart ?
                    <Link href='/cart' onClick={closeMobileDrawer}>
                        <button className='cart' onClick={() => setShowCart(false)}>
                            <CgShoppingCart size={22}/>
                            <span className='cart-item-qty'>{totalQty}</span>
                        </button>
                    </Link>
                    :
                    <button className='cart' onClick={() => setShowCart(true)}>
                        <CgShoppingCart size={22}/>
                        <span className='cart-item-qty'>{totalQty}</span>
                    </button>
                }
            </div>
        </nav>
    );
}

export default Navbar;
