import React from "react";

import {urlFor} from '../lib/client'
import {AiOutlineShopping} from 'react-icons/ai'
import Link from 'next/link'

import {Cart} from "./index";
import {useStateContext} from '../context/StateContext'

const Navbar = ()=> {

    const {totalQuantities, showCart,setShowCart} = useStateContext()



    return (
        <div className={'navbar-container'}>
            <p className={'logo'}>
                <Link href={'/'}>Fadaei Store</Link>
            </p>

            <button type={"button"}
                className={'cart-icon'}
                onClick={()=> setShowCart(true)}
            >
                <AiOutlineShopping/>
                <span className={'cart-item-qty'}>{totalQuantities}</span>
            </button>


            {showCart && <Cart/>}

        </div>
    )
}

export default Navbar;