import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img2 from "../../Images/foto2.jpg";
import img3 from "../../Images/foto3.jpg";
import img4 from "../../Images/foto4.jpg";
import "./main.scss";

function Main() {
  return (
    <div className="contentMain">
      <Carousel fade>
        <Carousel.Item>
          <img className="imgMain  " src={img2} alt="First slide" response />
          <Carousel.Caption>
            <h3 className="texto-borde">El Jardin de Infantes</h3>
            <p className="texto-borde">
              Sostiene un trabajo pedagógico que desafía el pensamiento del
              niño, alentando la multiplicidad de lenguajes y respuestas
              posibles.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="imgMain  " src={img3} alt="Second slide" response />
          <Carousel.Caption>
            <h3 className="texto-borde">El Jardin de Infantes</h3>
            <p className="texto-borde">
              Valora los procesos de enseñanza y aprendizaje, tanto como los
              resultados.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="imgMain" src={img4} alt="Third slide" response />
          <Carousel.Caption>
            <h3 className="texto-borde">El Jardin de Infantes</h3>
            <p className="texto-borde">
              Promueve la cultura del encuentro, la pedagogía de la escucha y de
              la esperanza.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Main;
