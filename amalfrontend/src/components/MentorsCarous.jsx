import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo1 from "../images/mentors/MY G SHAJI.png";
import photo2 from "../images/mentors/MALABAR FAISAL.png";
import photo3 from "../images/mentors/SHAMSUDHEEN NELLARA.png";
import photo4 from "../images/mentors/AJFAN KUTTIKKA.png";
import photo5 from "../images/mentors/ABDU SALAM HAJI.png";
import photo6 from "../images/mentors/ak firoz.png";
import photo7 from "../images/mentors/DR SHAJI.png";
import photo8 from "../images/mentors/HAZAN THILAL.png";
import photo9 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 1.png";
import photo10 from "../images/mentors/NIRMAN MOHAMMEDALI.png";
import photo11 from "../images/mentors/NUVAIS IMPEX.png";
import photo12 from "../images/mentors/RAFEEQ CENTUARY.png";
import photo13 from "../images/mentors/ROSE LOUNGE.png";
import photo14 from "../images/mentors/ROYAL DRIVE MUJEEB.png";
import photo15 from "../images/mentors/SHABEER ZILL MONEY.png";
import photo16 from "../images/mentors/SHAHEER ZILL MONEY.png";
import photo17 from "../images/mentors/sulaiman-karadan.png";
import photo18 from "../images/mentors/vahab treeg.png";
import photo19 from "../images/mentors/BASHEER KALATHINGAL.png";
import photo20 from "../images/mentors/FARZA MOIDUTTY.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./MentorsCarouse.css";


function MentorsCarous() {
    const mentorsPhotos = [
      { photo: photo1, name: "MY G SHAJI" },       
        { photo: photo2, name: "MALABAR FAISAL" },
        { photo: photo3, name: "SHAMSUDHEEN NELLARA" },
        { photo: photo4, name: "AJFAN KUTTIKKKA"  },
        { photo: photo5, name: "ABDU SALAM HAJI" },
        { photo: photo6, name: "AK FIROZ" },
        { photo: photo7, name: "DR SHAJI CRAFT HOSPITAL" },
        { photo: photo8, name: "HAZAN THIAL" },
        { photo: photo9, name: "NAUSHAD KALAPADAN" },
        { photo: photo10, name: "NIRMAN MOHAMMEDALI" },
        { photo: photo11, name: "NUVAIS IMPEX" },
        { photo: photo12, name: "RAFEEQ CENTUARY" },
        { photo: photo13, name: "ROSE LOUNGE" },
        { photo: photo14, name: "ROYAL DRIVE MUJEEB"  },
        { photo: photo15, name: "SHABEER ZILL MONEY" },
        { photo: photo16, name: "SHAHEER ZILL MONEY" },
        { photo: photo17, name: "SULAIMAN KARADAN" },
        { photo: photo18, name: "VAHAB TREEG" },
        { photo: photo19, name: "BASHEER KALATHINGAL" },
        { photo: photo20, name: "FARZA MOIDUTTY"},
      ];
    
      const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      return (
        // <div className="pt-5 pb-5">
        //   <Container className="mentors-bg">
        //     <Row className="p-5 mentors-area">
        //       <h1 className="h-1">Mentors</h1>
        //       <Carousel responsive={responsive}>
        //         {mentorsPhotos &&
        //           mentorsPhotos.map((image, i) => (
        //             <Col md={12} className="d-flex justify-content-center" key={i}>
        //               <Card className="img-1" style={{ width: "15rem" }}>
        //                 <Card.Img
        //                   className="w-100 img-stl"
        //                   variant="top"
        //                   src={image.photo}
        //                 />
        //                 <Card.Body>
        //                   <Card.Title className="txt">{image.name}</Card.Title>
    
        //                   <Card.Text></Card.Text>
        //                 </Card.Body>
        //               </Card>
        //             </Col>
        //           ))}
        //       </Carousel>
        //     </Row>
        //   </Container>
        // </div>
        <div className="pt-5 pb-5 mentors-section">
  <Container>
    <Row className="p-5 mentors-area">
      {/* <h1 className="h-1">Mentors</h1> */}
      <h1 className="section-title">Our Guiding Mentors</h1>
      <Carousel responsive={responsive}>
        {mentorsPhotos &&
          mentorsPhotos.map((image, i) => (
            <Col md={12} className="d-flex justify-content-center" key={i}>
            <Card className="img-1 fade-in">
                  <Card.Img
                    className="w-100 img-stl"
                    variant="top"
                    src={image.photo}
                  />
                  <Card.Body>
                    <Card.Title className="txt">{image.name}</Card.Title>
                  </Card.Body>
                </Card> 
           
         </Col>
    
          ))}
      </Carousel>
    </Row>
  </Container>
</div>

      );
    }
    

export default MentorsCarous;
