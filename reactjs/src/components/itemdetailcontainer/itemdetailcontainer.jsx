import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ItemDetail from "../itemdetail/itemdetail"
import SpinnerWithImage from "../spinner/spinner"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const { itemId } = useParams();
  
    useEffect(() => {
      const getItem = async () => {
        setLoading(true);
        const itemRef = doc(db, 'productos', itemId);
  
        try {
          const docSnap = await getDoc(itemRef);
          if (docSnap.exists()) {
            setItem({
              ...docSnap.data(),
              id: docSnap.id
            });
          } else {
            navigate('/product-not-found');
          }
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
  
      getItem();
    }, [itemId, navigate]);
    return (
        <div>
           {
            loading 
                ? <SpinnerWithImage/>
                : <ItemDetail {...item}/>
           }
        </div>
    )
}

export default ItemDetailContainer