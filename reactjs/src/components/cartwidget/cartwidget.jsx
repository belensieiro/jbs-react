import { useContext } from 'react'
import carro from '../../assets/cart2.svg'
import {Link} from 'react-router-dom'
import { Context } from '../../context/context'

export const Cartwidget = () => {

    const {cart,totalContador} = useContext(Context)

    return(
        <Link className={`cart-widget ${cart.length > 0 ? 'cart-widget-visible' : ''}`} to="/cart">
            <img src={carro} alt='icono bolsa de compras'/>
            <span className='span-carrito px-2'>{totalContador()}</span>
        </Link>
    )
}