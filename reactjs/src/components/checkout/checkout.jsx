import { useState } from "react"
import { useCartContext } from "../../context/context"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

const Checkout = () =>{

    const {cart, Total, vaciarCarrito} = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState ({
        nombre: '',
        apellido: '',
        direccion:'',
        localidad:'',
        email:''

    })

    const handleInputChange= (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const orden = {
            cliente: values,
            items: cart,
            total: Total(),
            fecha: new Date()
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(err => console.log(err))
    }

    if (orderId) {
        return (
            <div className="container p-0 mt-4 cart-container rounded bg-light">
                <h2 className="cart-title fs-3 mt-3 mb-4">Registro exitoso</h2>
                <p>Su código de compra es: <strong>{orderId}</strong> </p>
                <p>Por favor, conserve su código por si necesita hacer algún reclamo.</p>
                <p><strong>¡Muchas gracias por elegirnos!</strong></p>
                <div className="text-center mb-3">
                    <Link className="btn btn-danger" to="/">Volver al inicio</Link> 
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container p-0 mt-4 cart-container rounded bg-light">
            <h2 className="cart-title fs-3 mt-3 mb-4">Datos de compra</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={values.nombre} type="text" placeholder="Nombre" onChange={handleInputChange} className="form-control my-2" name="nombre" required/>
                    <input value={values.apellido} type="text" placeholder="Apellido" onChange={handleInputChange} className="form-control my-2" name="apellido" required/>
                    <input value={values.direccion} type="text" placeholder="Dirección" onChange={handleInputChange} className="form-control my-2" name="direccion" required/>
                    <input value={values.localidad} type="text" placeholder="Localidad" onChange={handleInputChange} className="form-control my-2" name="localidad" required/>
                    <input value={values.email} type="text" placeholder="Email" onChange={handleInputChange} className="form-control my-2" name="email" required/>
                    <div className="text-center my-4">
                        <button className="btn btn-danger" type="submit">Enviar</button>
                    </div>
                </form>
                
            </div> 
        </div>
    )
}

export default Checkout