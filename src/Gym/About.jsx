import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
    const handleNav=()=>{
        navigate('/plans')
    }
  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="about-intro">
        <h1>About GymFit</h1>
        <p>
          At GymFit, we believe in providing a welcoming environment for all
          fitness levels, from beginners to seasoned athletes. Our
          state-of-the-art facilities and expert trainers are here to support
          your journey to a healthier, stronger you.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals to lead healthier lives by
            providing high-quality fitness services and fostering a community of
            support, motivation, and education.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We aim to become the leading fitness community in the region, known
            for our innovative programs, expert guidance, and results-driven
            approach.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="about-facilities" style={{ color: "white" }}>
        <h2>Our Facilities</h2>
        <p>
          Our gym is equipped with top-tier fitness equipment, spacious workout
          areas, and a variety of fitness classes to suit your needs. We offer:
        </p>
        <ul>
          <li>Weight training area with the latest equipment</li>
          <li>Cardio zone featuring treadmills, bikes, and ellipticals</li>
          <li>Group classes including Yoga, Zumba, and HIIT</li>
          <li>Dedicated personal training zone</li>
          <li>Sauna and recovery rooms</li>
        </ul>
      </section>

      {/* Meet the Trainers Section */}
      <section className="about-trainers">
        <h2>Meet Our Trainers</h2>
        <p>
          Our team of professional trainers is here to guide you every step of
          the way. Whether you're looking for personalized training or group
          class instruction, we’ve got you covered.
        </p>
        <div className="trainers-grid">
          <div className="trainer-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4EBXLI-mkizOWDiRf2bVt3G7QHzpEjVXnQ&s"
              alt="Trainer 1"
            />
            <h3>Saket Gokhale</h3>
            <p>
              Certified strength and conditioning specialist with over 10 years
              of experience in weightlifting and bodybuilding.
            </p>
          </div>
          <div className="trainer-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveTU2LmiUuJmSqDEyjsY7KdW8E19NM_4WeQ&s"
              alt="Trainer 2"
            />
            <h3>Mihir Pawaskar</h3>
            <p>
              Yoga and mindfulness instructor who specializes in flexibility,
              balance, and mental well-being.
            </p>
          </div>
          <div className="trainer-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PG-qddp1U-zyLhQfB6KMwzYwB-l_UNAlRGYKj72KmT3s-zkGok27xLBEAmqa4tYTq10&usqp=CAU"
              alt="Trainer 3"
            />
            <h3>Deonn</h3>
            <p>
              Personal trainer focused on functional fitness, HIIT, and athletic
              performance improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to Join?</h2>
        <p>Become a member today and start your fitness journey with us!</p>
        <button className="cta-button" onClick={handleNav}>Join Now</button>
      </section>
    </div>
  );
};

export default About;
