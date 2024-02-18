import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar /> 
      <section className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="about-content grid">
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-text">
              <h2 className="about-title fs-26 ls-1">What is Book Nook?</h2>
              <p className="fs-17">
                Welcome to Book Nook, where the magic of literature comes to
                life! At Book Nook, we believe in the transformative power of
                stories. Our curated collection spans diverse genres, inviting
                you to explore captivating tales and immerse yourself in
                timeless wisdom. Whether you're a seasoned bibliophile or a
                casual reader, our passion for books is boundless, and we're
                thrilled to share it with you. Join us on this literary
                journey, where every page turns into a new adventure, and the
                love for reading is celebrated. Book Nook – your haven for
                literary discovery awaits!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
