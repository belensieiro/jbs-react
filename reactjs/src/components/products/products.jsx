import { Link } from 'react-router-dom'

const Product = ({name, id, category, price}) => {
    const imagePath = `/public/${id}.png`;

    return(   
        <div className="col-12 col-md-4">
            <div className="card m-4 bg-bg">
                <p className="p-c m-0 pt-4 ">ID PRODUCTO: {id}</p>
                <img className="px-4 img-card" src={imagePath} alt={name} />
                <h4 className="text-center pt-2 card-title">{name.toUpperCase()}</h4>
                <div className="d-flex mx-4">
                    <p className="p-color">{category.toUpperCase()}</p>
                </div>
                <p className="text-center price">$ {price}</p>
                <div className="d-flex justify-content-center mb-3">
                    <Link className="btn btn-danger" to={`/detail/${id}`}>Ver más</Link>
                </div>
            </div>
        </div>     
    )
}

export default Product