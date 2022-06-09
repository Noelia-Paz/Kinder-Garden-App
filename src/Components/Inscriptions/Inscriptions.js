import React from "react";
import "./inscriptions.scss";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function inscriptions() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_0tn7dj8",
      "template_mgbt5qm",
      e.target,
      "QvBuxbHtSWiZHY-0s"
    );

    swal({
      text: "Gracias por enviar los Datos de Inscripcion, Nos pondremos en contancto a la brevedad!",
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
    <div className="contentInscripcion">
      <p className="text1">
        Definimos el Jardín de Infantes como el medio eficaz para el desarrollo
        pleno e integral de la persona niño/a. Es un espacio privilegiado para
        el desarrollo de la capacidad artística creadora.
      </p>
      <h1 className="text2">INSCRIPCIÓN JARDÍN INFANTES</h1>
      <h4 className="text3">SOLICITUD DE ENTREVISTA DE ASPIRANTES</h4>
      <Form className="formInscripcion" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="emailInscriptions"
            placeholder="Dejanos tu Email para contactarte"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Dejanos tu Telefono para contactarte"
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nameInscriptions"
              placeholder="Nombre del Alumno"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              placeholder="Apellido del Alumno"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              name="date"
              type="date"
              placeholder="Fecha"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Institución de procedencia</Form.Label>
            <Form.Control
              type="text"
              name="data"
              placeholder="Nombre de la institucion"
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control
            type="text"
            name="home"
            placeholder="Capital o Provincia"
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Barrio</Form.Label>
            <Form.Control name="barrio" type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Calle</Form.Label>
            <Form.Control name="calle" type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Altura</Form.Label>
            <Form.Control name="altura" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>¿Tiene hermano/a en la institución?</Form.Label>
            <Form.Select name="respuesta" defaultValue="Choose...">
              <option>Si</option>
              <option>No</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              En caso de tener hermano/a, ingresar Nombre y Nivel
            </Form.Label>
            <Form.Control name="info" placeholder="Ingrese los datos" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Enviar Datos
        </Button>
      </Form>
    </div>
  );
}

export default inscriptions;
