import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import Counter from '../counter/Counter'
import ItemSpecs from '../ItemSpecs/ItemSpecs'
//SCSS
import './itemDetails.scss'

const ItemDetails = ({item}) => {

    const {name, imageUrl, description, price, currentStock, id, specs} = item

    const { 
        added, 
        setAdded,
        stock, 
        setStock, 
        dispatchCount,
    } = useContext(StoreContext)

    useEffect(() => {
        dispatchCount('COUNTER_RESET')
        setStock(currentStock)
        setAdded(false)
    }, [])

    return(
        <>
            <h3>{name}</h3>
            <div className="detailOverview">
                <img alt={id} src={imageUrl} />
                <div className="detailsDescription">
                    <h2>$ {price}</h2>
                    <p>{description}</p>
                    <p>Disponibles: {stock}</p>
                    {added ?
                        <div className='itemAdded'>
                            <Link 
                                className='btn btn-primary'
                                to={`/cart`}
                            >Finalizar compra</Link>
                            <Link
                                className='btn btn-outline-primary'
                                to={`/`}
                            >
                                Seguir comprando
                            </Link>
                        </div>
                        : <Counter 
                            currentStock={currentStock}
                            item={{
                                id:id,
                                name: name,
                                price:price,
                                imageUrl:imageUrl,
                                stock:stock
                            }}
                        />
                    }
                </div>
            </div>
            <ItemSpecs specs={specs} />
        </>
    )
}

export default ItemDetails