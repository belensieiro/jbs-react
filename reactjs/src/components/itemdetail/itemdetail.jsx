import { useContext, useState } from "react";
import AccordionDetail from "../accordiondetail/accordiondetail";
import Counter from "../counter/counter";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";


const ItemDetail = ({name, id, category, description, price, origen, colores, destacado, stock}) => {
    const imagePath = `/public/${id}.png`;

    const {agregarAlCarrito, Agregado} = useContext(Context)

    const [contador, setContador] = useState(1)

    const handleAgregar = () => {
        const item = {
            name, id, category, description, price, origen, colores, destacado, stock, contador
        }

        agregarAlCarrito(item)
    }

    return(
        <div className="row gap-5 m-4 justify-content-center align-items-center">  
            <div className="col-12 col-md-3 p-0">
                <div className="card bg-bg">
                    <p className="p-c m-0 pt-4 ">ID PRODUCTO: {id}</p>
                    <img className="px-4 img-card" src={imagePath} alt={name} />
                    <h4 className="text-center pt-2 card-title">{name.toUpperCase()}</h4>
                    <div className="d-flex mx-4">
                        <p className="p-color">{category.toUpperCase()}</p>
                    </div>
                    <p className="text-center price">$ {price}</p>
                </div>
            </div> 
            <div className="col-12 col-md-7 p-0">
                <div>
                    <div>
                        <AccordionDetail 
                        description={description}
                        destacado={destacado}
                        origen={origen}
                        colores={colores} />
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        {
                            Agregado(id)
                            ?   <div className="d-flex justify-content-center">
                                 <Link className="btn btn-danger me-2" to={"/cart"}> Finalizar compra </Link>
                                 <Link className="btn btn-danger" to={"/"}>Seguir comprando</Link>
                                </div>
                            : <Counter
                                max={stock}
                                contador={contador}
                                setContador={setContador}
                                handleAgregar={handleAgregar}
                             /> 
                        }
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default ItemDetail