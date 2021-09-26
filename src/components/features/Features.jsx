import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const Features = () => {
  return (
    <div className="mt-9 pb-5">
      <div className="w-80 w-md-50 mx-auto text-center">
        <h3>Features</h3>
        <p>
          Out aim is to make it quick and easy for you to access your favorite
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
            <Col sm={8} className='mx-auto'>
              <Nav variant="pills" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="simple-bookmarking">
                    Simple Bookmarking
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="speedy-searching">
                    Speedy Searching
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="easy-sharing">Easy Sharing</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10} className='mx-auto mt-5'>
              <Tab.Content>
                <Tab.Pane eventKey="simple-bookmarking">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  beatae at blanditiis repudiandae ea, ipsum est asperiores
                  voluptatem repellat officia.
                </Tab.Pane>
                <Tab.Pane eventKey="speedy-searching">
                  New content is here. so no need to be worry, i will be there
                  in 10 minutes.
                </Tab.Pane>
                <Tab.Pane eventKey="easy-sharing">
                  content is here. so no need to be worry, i will be there in 10
                  minutes.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Features;
