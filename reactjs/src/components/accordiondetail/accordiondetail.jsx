import Accordion from 'react-bootstrap/Accordion';

function AccordionDetail({description, destacado, origen, colores}) {
  return (
    <div className='container accordion m-0 p-0'>
     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
      <Accordion.Header className='accordion-header'>Descripción</Accordion.Header>
          <Accordion.Body>
            {description}
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Destacado</Accordion.Header>
        <Accordion.Body>
          {destacado}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Origen</Accordion.Header>
        <Accordion.Body>
        {origen}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Colores</Accordion.Header>
        <Accordion.Body>
        {colores}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default AccordionDetail

