import React from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import hero from "../../images/illustration-hero.svg";
import Background from "./Background";

const Header = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Container className="header d-flex align-items-center flex-column-reverse flex-md-row mt-6">
        <div className="text w-100 w-md-50 text-center text-md-start">
          <h1>A simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <Button variant="primary" className='bg-white-hover text-dark-hover shadow-lg mx-3 mx-md-0 me-md-3 mt-3'>Get it on Chrome</Button>
          <Button variant="light" className='bg-white-hover text-dark text-success-hover shadow-lg mt-3 px-3'>Get it on Firefox</Button>
        </div>
        <div className="p-relative image w-100 w-md-50 pb-2 mb-5 mb-md-0">
          <img src={hero} alt="Pc screen" className="w-100"/>
          <Background boolean={true}/>
        </div>
      </Container>
      
    </div>
  );
};

export default Header;
