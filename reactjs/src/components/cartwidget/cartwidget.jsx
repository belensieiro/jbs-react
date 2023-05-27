import cart from '../../assets/cart2.svg'

export const Cartwidget = () => {

    return(
        <div>
            <img src={cart} alt='icono bolsa de compras' />
            <span className='span-carrito px-2'>0</span>
        </div>
    )
}