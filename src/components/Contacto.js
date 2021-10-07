import React from 'react';
import Form from 'react-bootstrap/Form'
function Contacto() {
    return ( 
        <div className="contacto bg-light">
            <h1 className="text-center pt-5 pb-5 text-title fw-bold text-dark">Envianos un mensaje</h1>
            <div className="contacto-content bg-dark py-2">
                <Form className="filds container">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-light">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-light">Email</Form.Label>
                        <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-light">Escribe tu mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
        </div>
        
     );
}

export default Contacto;