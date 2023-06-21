import Form from "react-bootstrap/Form"

const Contacto= () =>{
    return(
        <div className="background-contacto py-5">
            <h1 className="text-center text-light h1-contacto">CONTÁCTANOS</h1>
            <h2 className="text-center fs-4 text-light h2-contacto">Completá el formulario con tus datos para que podamos ayudarte.</h2>
            <Form className="container bg-black text-light rounded px-5 my-5 py-5 contenedor-formulario">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="surname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo electrónico:</Form.Label>
                    <Form.Control type="mail" placeholder="ejemplo@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Motivo:</Form.Label>
                    <Form.Control as="textarea" placeholder="Escribe aquí tu consulta, te contáctaremos a la brevedad." rows={3} />
                </Form.Group>
                <div className="d-flex justify-content-center mb-3">
                    <button type="button" className="btn btn-danger mt-5">Enviar</button>
                </div>
            </Form>
        </div>  
    )
}

export default Contacto