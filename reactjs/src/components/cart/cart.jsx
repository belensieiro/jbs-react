import { useContext } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom"; 

const Cart = () => {
  const { cart, Total, vaciarCarrito, eliminarDelCarrito } = useContext(Context);
  
  return (
    <div className="container p-0 mt-4 cart-container rounded bg-light">
      <h2 className="cart-title fs-3 mt-3 mb-4">Tu carrito</h2>    
      {cart.length > 0 ? (
        cart.map((prod) => (
          <div key={prod.id} className="d-flex producto">
            <div className="d-flex flex-column cart-info border border-dark border-opacity-10 bg-white rounded">
              <h4>{prod.name}</h4>                
              <div className="d-flex">
                <img className="img-card me-3" src={`/${prod.id}.png`} alt={prod.name} />
                <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="cart-p">Unidades: <b>{prod.contador}</b></p>
                <p className="cart-p">Precio: <b>${prod.price}</b></p>
                <div onClick={() => eliminarDelCarrito(prod.id)}>
                  <img src={`/cross.svg`} alt="icono cruz" />
                </div>           
                </div>
              </div>
            </div>  
          </div>
        ))
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center mb-3">
          <p>Aún no has agregado productos a tu carrito. <b>¡No te pierdas la oportunidad!</b></p>
          <Link className="btn btn-danger" to="/">Descubre zapatillas</Link> 
        </div>
      )}
      {cart.length > 0 && (
        <div>
          <h5 className="cart-total text-left">TOTAL DE LA COMPRA: ${Total()}</h5>
          <button onClick={vaciarCarrito} className="btn btn-danger m-3">Vaciar carrito</button>
          <Link className="btn btn-danger" to="/checkout">Confirmar compra</Link> 
        </div>
      )}
    </div>
  )
}

export default Cart




