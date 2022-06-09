import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./header.scss";

function Header() {
  return (
    <div className="contentHeader">
      <div>
        <Nav className="NavSup justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Link className="item" to="/">
                Inicio
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="item" to="/jardin">
                El Jardin
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link className="item" to="/informacion">
                Información
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link className="item" to="/galeria">
                Galeria
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="TextHeader text-center mt-4 mb-4">BURBUJAS DE ALGODÓN</p>
        <Nav className="item">
          <Nav.Item>
            <Nav.Link>
              <Link className="item" to="/contacto">
                Contacto
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link eventKey="link-1" className="item" to="/inscripcion">
                Inscripciones
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <img src={logo} className="ImgHeader" response />
      </div>
    </div>
  );
}

export default Header;
