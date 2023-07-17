import { Link } from "react-router-dom"


const Error=() =>{
    return(
        <div>
            <div className="contenedor-error">
                <img className="position-absolute img-fluid img-error" src="../error.png" alt="huellas de pisadas" />
                <div className="d-flex flex-column justify-content-center align-items-center p-0">
                    <h1 className="titulo-error m-0 p-0">404</h1>
                    <h2 className="text-center titulo-uno m-0 p-0">PÁGINA NO ENCONTRADA</h2>
                    <p className="mx-5 px-2 mt-4 fs-5 text-center">
                        <b>¡No te preocupes, un tropezón no es caída!</b>
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                        <Link className="btn btn-danger btn-lg mb-5 mx-4 text-light" to="/">
                             Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error