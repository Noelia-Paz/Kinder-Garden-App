import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import img1 from "../../Images/foto1.jpg";
import img5 from "../../Images/foto5.jpg";
import img8 from "../../Images/foto8.jpg";
import img9 from "../../Images/foto9.jpg";
import "./thegarden.scss";

export default function TheGarden() {
  return (
    <div className="contentGarden">
      <Card className="cardContent">
        <Card.Header as="h5">EL JARDIN</Card.Header>
        <Card.Body>
          <Card.Text>
            Definimos el Jardín de Infantes como el medio eficaz para el
            desarrollo pleno e integral de la persona niño/a. Es un espacio
            donde confluyen modos de relación, formas de expresión de
            sentimientos, recreación y resignificación de contenidos, signos,
            señales y símbolos de la cultura en la que estamos inmersos.
          </Card.Text>
          <img className="imgCard" src={img5} />
        </Card.Body>
      </Card>
      <Card className="cardContent">
        <Card.Header as="h5">INSTALACIONES</Card.Header>
        <Card.Body>
          <Card.Title>Aulas Climatizadas</Card.Title>
          <Card.Text>
            La actividad se desarrolla en un inmueble de sólida construcción,
            con diseño de primera calidad; conformado por amplias salas y
            dependencias decoradas estética y armoniosamente, buscando un clima
            de serenidad para la construcción de los vínculos humanos.
          </Card.Text>
          <Image className="imgCard" src={img1} />
        </Card.Body>
      </Card>

      <Card className="cardContent">
        <Card.Header as="h5">SERVICIO DE COMEDOR</Card.Header>
        <Card.Body>
          <Card.Title>Menu Alimentacion Saludable</Card.Title>
          <Card.Text>
            Se brinda a las familias que lo necesitan, la posibilidad de que sus
            hijos almuercen en la institución. La elaboración de los alimentos
            se realiza diariamente en la institución, por personal a tal efecto
            empleado, y bajo estricta supervisión.
          </Card.Text>
          <Image className="imgCard" src={img8} />
        </Card.Body>
      </Card>
      <Card className="cardContent">
        <Card.Header as="h5">TALLERES</Card.Header>
        <Card.Body>
          <Card.Title>Aula para Talleres</Card.Title>
          <Card.Text>
            Entendemos al taller como un modo de organizar propuestas con
            características comunes a otras actividades, pero con algunas que
            son propias. Ésta modalidad es abierta, flexible y se sustenta en la
            participación activa, el constante intercambio, la construcción
            conjunta del conocimiento en un marco de respeto, de interacción y
            cooperación
          </Card.Text>
          <Image className="imgCard" src={img9} />
        </Card.Body>
      </Card>
    </div>
  );
}
