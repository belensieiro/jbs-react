import ItemListContainer from "../itemlistcontainer/itemlistcontainer";
import VideoBanner from "../videobanner/videobanner";


const Banner = () =>{
    return(
        <div>
            <VideoBanner/>
            <div className="container-fluid text-center mt-5">
                <h1 className="d-inline-block aling-items-center p-3 title">PISÁ FUERTE</h1>
                <h2 className="subtitle">Conocé nuestras zapatillas y dejá huella.</h2>
            </div>
            <ItemListContainer/>
        </div>
    )
}

export default Banner