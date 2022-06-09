import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import "./contact.scss";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_0tn7dj8",
      "template_mgbt5qm",
      e.target,
      "QvBuxbHtSWiZHY-0s"
    );

    swal({
      text: "Gracias por ponerte en contacto, Nos comunicaremos a la brevedad!",
      icon: "success",
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  return (
    <div className="contentForm">
      <Form className="formContact" onSubmit={sendEmail}>
        <Form.Group controlId="formBasicEmail">
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
          </Form.Group>
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ejemplo@gmail.com"
            required
          />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con otra persona.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            type="text"
            name="asunto"
            placeholder="Escriba el asunto del Mensaje"
            className="Asunto"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            type="text"
            name="message"
            placeholder="Escriba el Mensaje"
            className="msj"
            required
          />
        </Form.Group>

        <Button className="btnContact" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
