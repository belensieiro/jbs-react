import { Datos } from "../../funciones/datos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemdetail/itemdetail"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        Datos()
            .then((res) => {
               setItem(res.find((prod) => prod.id === Number(itemId)))
            })    
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div>
           {
            loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
           }
        </div>
    )
}

export default ItemDetailContainer