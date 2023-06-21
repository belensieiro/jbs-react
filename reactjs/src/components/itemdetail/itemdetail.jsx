import AccordionDetail from "../accordiondetail/accordiondetail";


const ItemDetail = ({name, id, category, description, price, origen, colores, destacado}) => {
    const imagePath = `/public/${id}.png`;

    return(
        <div className="row">  
            <div className="col-12 col-md-4">
                <div className="card m-4 bg-bg">
                    <p className="p-c m-0 pt-4 ">ID PRODUCTO: {id}</p>
                    <img className="px-4 img-card" src={imagePath} alt={name} />
                    <h4 className="text-center pt-2 card-title">{name.toUpperCase()}</h4>
                    <div className="d-flex mx-4">
                        <p className="p-color">{category.toUpperCase()}</p>
                    </div>
                    <p className="text-center price">$ {price}</p>
                </div>
            </div> 
            <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
            <AccordionDetail 
            description={description}
            destacado={destacado}
            origen={origen}
            colores={colores} />
            </div>
        </div>     
    )
}

export default ItemDetail