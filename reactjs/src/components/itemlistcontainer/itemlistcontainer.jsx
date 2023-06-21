import ProductsList from "../productslist/productslist"
import {useProducts} from "../../hooks/useProducts"

const ItemListContainer = () => {
    const { productos, loading } = useProducts()

    console.log(loading, productos)


    return (
        <div>
            <div className="container my-5">
                {
                    loading
                        ? <h2 className="carga">Cargando...</h2>
                        : <ProductsList items={productos}/>
                }
            </div>
        </div>    
    )    
}

export default ItemListContainer
