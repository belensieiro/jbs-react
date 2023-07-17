import ProductsList from "../productslist/productslist"
import {useProducts} from "../../hooks/useProducts"
import SpinnerWithImage from "../spinner/spinner"

const ItemListContainer = () => {
    const { productos, loading } = useProducts()

    return (
        <div>
            <div className="container my-5">
                {
                    loading
                        ? <SpinnerWithImage/>
                        : <ProductsList items={productos}/>
                }
            </div>
        </div>    
    )    
}

export default ItemListContainer
