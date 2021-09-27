import React from "react";
import { Tab, Row, Col, Nav, Container, Button } from "react-bootstrap";
import tab1 from "../../images/illustration-hero.svg";
import tab2 from "../../images/illustration-features-tab-2.svg";
import tab3 from "../../images/illustration-features-tab-3.svg";
import Background from "../header/Background";

const tabArr = [
  {
    key: "simple-bookmarking",
    img: tab1,
    header: "Bookmark in one click",
    para: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
  },
  {
    key: "speedy-searching",
    img: tab2,
    header: "Intelligent search",
    para: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. ",
  },
  {
    key: "easy-sharing",
    img: tab3,
    header: "Share your bookmarks",
    para: "Easily share your bookmarks and collections with others. Create a shareable lint that you can send at the click a button.",
  },
];

const Features = () => {
  return (
    <Container className="mt-9 pb-5">
      <div className="w-80 w-md-50 mx-auto text-center">
        <h3>Features</h3>
        <p>
          Our aim is to make it quick and easy for you to access your favorite
          websites, Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="pt-5">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="simple-bookmarking"
        >
          <Row>
            <Col sm={10} className="mx-auto">
              <Nav
                variant="pills"
                className="justify-content-center flex-column flex-md-row text-center tabs"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="simple-bookmarking"
                    className="text-black bg-white px-0 py-2 d-inline-block border border-2 border-white mx-md-4 cursor-pointer"
                  >
                    Simple Bookmarking
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="speedy-searching"
                    className="text-black bg-white px-0 py-2 d-inline-block border border-2 border-white mx-md-4 cursor-pointer"
                  >
                    Speedy Searching
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="easy-sharing"
                    className="text-black bg-white px-0 py-2 d-inline-block border border-2 border-white mx-md-4 cursor-pointer"
                  >
                    Easy Sharing
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={10} className="mx-auto">
              <hr />
            </Col>

            <Col sm={12} className="mx-auto mt-2">
              <Tab.Content>
                {tabArr.map((val, ind) => {
                  return (
                    <Tab.Pane eventKey={val.key} key={ind}>
                      <Row className="text-center text-md-start align-items-center">
                        <Col
                          md={6}
                          className="p-relative image w-100 w-md-50 pb-2 mb-5 mb-md-0"
                        >
                          <img
                            src={val.img}
                            alt="Pc screen"
                            className="w-100 mt-2"
                          />
                          <Background boolean={false} />
                        </Col>
                        <Col md={6}>
                          <h3 className="pb-2">{val.header}</h3>
                          <p>{val.para}</p>
                          <Button
                            variant="primary"
                            className="bg-white-hover text-dark-hover shadow-lg px-4 mt-2"
                          >
                            More Info
                          </Button>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};

export default Features;
