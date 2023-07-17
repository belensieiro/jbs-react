

const Counter = ({max, contador, setContador, handleAgregar}) => {
    
    const handleRestar = () => {
        contador > 1 && setContador(contador - 1)
    }

    const handleSumar = () => {
        contador < max && setContador(contador + 1)
    }

    return(
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center">
                <button onClick={handleRestar} className="btn btn-warning m-1">-</button>
                <span className="m-1">{contador}</span>
                <button onClick={handleSumar} className="btn btn-warning m-1">+</button>
            </div>
            <div className="d-flex">
                <button onClick={handleAgregar} className="btn btn-danger mt-1">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter