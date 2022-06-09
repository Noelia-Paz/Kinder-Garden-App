import React from "react";
import "./information.scss";
import Card from "react-bootstrap/Card";

function Information() {
  return (
    <div className="divInfo">
      <Card className="cardInfo">
        <Card.Body>
          <Card.Title>JORNADA EDUCATIVA</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Horarios</Card.Subtitle>
          <Card.Text>
            El horario de las actividades curriculares obligatorias del Jardín
            es de 8:30 a 12:30hs.
            <br />
            <br />
            La institución ofrece además servicios de comedor y talleres hasta
            las 16:30 hs. Favoreciendo así a las familias con las exigencias
            laborales.
            <br />
            <br />
            Para las áreas curriculares las actividades se desprenden del Diseño
            Curricular vigente considerando al niño-alumno como un sujeto de
            derechos a una educación integral. Dichas áreas son: Formación
            personal y social; Matemática; Prácticas del Lenguaje; Educación
            Física; el Ambiente Natural y Social; Lenguaje de las artes y los
            medios y Juego.
            <br />
            <br />
            En el turno tarde los pequeños de sala de 3 años descansan una hora
            y comienzan a las 14:30hs. con Talleres. Los de 4 y 5 años comienzan
            los talleres a las 13:30hs. hasta las 15:30hs.. Meriendan y esperan
            la llegada de las familias hasta las 16:30hs. que cesa la actividad.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Information;
