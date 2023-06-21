import { Datos } from "../funciones/datos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const useProducts = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        Datos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((item) => item.category === categoryId))
                }
            })    
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return {
        productos,
        loading
    }
}

