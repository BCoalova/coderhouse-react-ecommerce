import React, {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
//BOOTSTRAP
import {Button} from 'react-bootstrap'
import EmptyCart from '../EmptyCart/EmptyCart'
import ItemInCart from '../itemInCart/ItemInCart'
import './cart.scss'

const Cart = () => {

    const {cart, handleTotal, handleClearAll} = useContext(StoreContext)

    return (
        <div className='container cart_container'>
            
                {cart.length === 0 ? 
                    <EmptyCart />
                    : <div className='cart_items'>
                        {cart.map((itemInCart) => 
                                <div key={itemInCart.item.id + itemInCart.quantity}  className='cart_items'>
                                    <ItemInCart 
                                        item={itemInCart} 
                                    />
                                </div>
                        )}
                    </div>
                }
                <div className='cart_total'> 
                    <h2>Total: $ {handleTotal()}</h2>
                    <Button variant="outline-danger" onClick={handleClearAll} >Borrar todo</Button>
                </div>
            
        </div>
    )
}

export default Cart
