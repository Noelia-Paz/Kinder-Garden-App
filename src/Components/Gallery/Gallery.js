import React from "react";
import "./gallery.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import img2 from "../../Images/foto2.jpg";
import img3 from "../../Images/foto3.jpg";
import img4 from "../../Images/foto4.jpg";
import img5 from "../../Images/foto5.jpg";
import img6 from "../../Images/foto6.jpg";
import img7 from "../../Images/foto7.jpg";

function Gallery() {
  return (
    <div className="contentGallery">
      <CardGroup>
        <Card className="cardGallery">
          <Card.Body>Te cuento un Cuento.</Card.Body>
          <Image className="imgGallery" src={img2} />
        </Card>
        <Card className="cardGallery">
          <Card.Body>Imaginando, un dia especial.</Card.Body>
          <Image className="imgGallery" src={img3} />
        </Card>
        <Card className="cardGallery">
          <Card.Body>Diversion.</Card.Body>
          <Image className="imgGallery" src={img4} />
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="cardGallery">
          <Card.Body>Nuestros alumnos y Docentes.</Card.Body>
          <Image className="imgGallery" src={img5} />
        </Card>
        <Card className="cardGallery">
          <Card.Body>Espacio verde.</Card.Body>
          <Image className="imgGallery" src={img6} />
        </Card>
        <Card className="cardGallery">
          <Card.Body>Espacio para crear.</Card.Body>
          <Image className="imgGallery" src={img7} />
        </Card>
      </CardGroup>
    </div>
  );
}

export default Gallery;
