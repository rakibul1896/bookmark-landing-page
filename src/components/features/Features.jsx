import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

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
      <Container className='pt-5'>
        <Tabs >
          <Tab eventKey="simple-bookmarking" title="Simple Bookmarking">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
            at blanditiis repudiandae ea, ipsum est asperiores voluptatem
            repellat officia.
          </Tab>
          <Tab eventKey="speedy-searching" title="Speedy Searching">
            New content is here. so no need to be worry, i will be there in 10 minutes.
          </Tab>
          <Tab eventKey="easy-sharing" title="Easy Sharing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
            at blanditiis repudiandae ea, ipsum est asperiores voluptatem
            repellat officia.
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Features;
