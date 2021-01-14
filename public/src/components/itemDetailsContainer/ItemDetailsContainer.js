import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemDetails from '../itemDetails/ItemDetails'
import Loading from '../loading/Loading'
//CSS
import './itemDetailsContainer.scss'

const ItemDetailsContainer = () => {

    const {loading, data} = useContext(StoreContext)
    const params = useParams()

    return(
        <div className="itemDetailContainer">
            { loading ? 
                <Loading /> : 
                data.map((product)=>{
                    return(
                        product.id === params.id ? 
                        <ItemDetails 
                            key={product.id}
                            item={{
                                    id: product.id,
                                    name : product.name,
                                    imageUrl : product.imageUrl,
                                    category : product.category,
                                    description : product.description,
                                    price : product.price,
                                    currentStock : product.stock,
                                    specs: product.specifications,
                                    params: params.id
                                }}
                        /> 
                        : null
                    )
                })
            }
        </div>
    )
}

export default ItemDetailsContainer