import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

const extensionArr = [
  {
    img: chrome,
    header: "Add to Chrome",
    para: "Minimum version 62",
    top: 5
  },
  {
    img: firefox,
    header: "Add to Firefox",
    para: "Minimum version 55",
    top: 8
  },
  {
    img: opera,
    header: "Add to Opera",
    para: "Minimum version 46",
    top: 11
  },
];

const DownloadExtension = () => {
  return (
    <Container className="mt-8 mb-12">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <h3>Download the extension</h3>
          <p className="mt-3">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favorite you'd like us to prioritize.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center align-items-start">
        {extensionArr.map((val, ind) => {
          return (
            <Col
              xs={10}
              sm={6}
              md={4}
              lg={3}
              className={`shadow rounded-4 p-0 pb-4 mx-4 mt-5 mt-xl-${val.top}`}
              key={ind}
            >
              <img src={val.img} alt="" className="py-5" />
              <h5>{val.header}</h5>
              <p>{val.para}</p>
              <div className="overflow-hidden h-30px w-100 my-3">
                {[...Array(100).keys()].map((val) => {
                  return (
                    <div className="bg-success h-2px w-2px d-inline-block  m-2" key={val}></div>
                  );
                })}
              </div>
              <Button variant="primary" className="">
                Add & Install Extension
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default DownloadExtension;
