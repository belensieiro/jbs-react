import { useState, createContext, useContext } from "react";


export const Context = createContext()

export const useCartContext = () => useContext(Context)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    const agregarAlCarrito = (item) => {
        setCart ([...cart,item])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const Agregado = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const Total = () => {
        return cart.reduce((acumulador,prod)=> acumulador + prod.price * prod.contador, 0)
    }

    const totalContador = () => {
        return cart.reduce((acumulador,prod)=> acumulador + prod.contador, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }
        

    return(
        <Context.Provider value={{
            cart,
            agregarAlCarrito,
            Agregado,
            Total,
            vaciarCarrito,
            eliminarDelCarrito,
            totalContador
        }}>
            {children}
        </Context.Provider>
    )
}