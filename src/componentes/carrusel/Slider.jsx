import React, { useState , useEffect } from "react";
import { Card, Button , CardBody, CardTitle , CardText } from "reactstrap";
import Slider from "react-slick";

const Carousel = ({datosImg, handleBorrar, handleEditar}) => {
  const [imagenes, setImagenes] = useState([]);
  
  useEffect(() => {
    const imagenesTipo1 = datosImg.filter(imagen => imagen.tipoImagen === '1');  
    setImagenes(imagenesTipo1);

  }, [datosImg]);

  return (
    <div className="w-100 mt-3 p-3">
      <h4 className="text-start text-light">Carrusel</h4>
      <Slider
        slidesToShow={3}
        slidesToScroll={1}
        arrows={true}
        dots={true}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
      {imagenes.map((imagen) => (
        <Card  key={imagen.idImagen} className="h-100 ">
          <img src={`http://localhost/12-Dashboard/src/back-end/Fotos/img/${imagen.nomImagen}`} alt={imagen.nomImagen} className="w-100 h-100" />
          <CardBody>
            <CardTitle tag="h5">
              {imagen.nomImagen}
            </CardTitle>
            <CardText>
              {imagen.descripcionImagen}
            </CardText>
            <Button className="w-50" outline color="primary" onClick={() => handleEditar(imagen)}>Editar</Button>
            <Button className="w-50" outline color="danger" onClick={() => handleBorrar(imagen)}>Eliminar</Button>
          </CardBody>
        </Card>
      ))}
      </Slider>
    </div>
  );
};

export default Carousel;
