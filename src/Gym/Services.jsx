import React from "react";
import "./Services.css";

import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
    const handleNav=()=>{
        navigate('/plans')
    }
  return (
    <div className="services-page">
      {/* Introduction */}
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>
          At [Gym Name], we offer a range of fitness services designed to help
          you reach your goals, whether you're a beginner or a seasoned athlete.
        </p>
      </section>

      {/* Personal Training */}
      <section className="service-section personal-training">
        <h2>Personal Training</h2>
        <p>
          Our certified personal trainers will work with you one-on-one to
          create a custom workout plan tailored to your fitness level and goals.
          Whether you're aiming for weight loss, muscle gain, or general
          fitness, we've got you covered.
        </p>
        <div className="service-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QsImIFU_CVVHJxYN4MfM8vRJGNeGI_XHgg&s"
            alt="Personal Training"
          />
        </div>
      </section>

      {/* Group Fitness Classes */}
      <section className="service-section group-classes">
        <h2>Group Fitness Classes</h2>
        <p>
          From high-energy cardio workouts to relaxing yoga sessions, our group
          fitness classes offer something for everyone. Join a community of
          fitness enthusiasts and have fun while getting fit!
        </p>
        <ul>
          <li>Yoga</li>
          <li>Zumba</li>
          <li>HIIT (High-Intensity Interval Training)</li>
          <li>Spinning</li>
        </ul>
        <div className="service-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRvG01VDF19by44nFt9TnDlK-SoJU1PB1ug&s"
            alt="Group Fitness Classes"
          />
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="service-section specialized-programs">
        <h2>Specialized Programs</h2>
        <p>
          Our specialized fitness programs are designed to target specific areas
          of fitness, such as strength building, flexibility, and
          rehabilitation.
        </p>
        <ul>
          <li>Strength and Conditioning</li>
          <li>Rehabilitation and Recovery</li>
          <li>Flexibility Training</li>
          <li>Weight Management</li>
        </ul>
        <div className="service-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Vf4j7UKISPK_qKfOuzc7XZwlZKHkFUvoDA&s"
            alt="Specialized Programs"
          />
        </div>
      </section>

      {/* Membership Plans */}
      <section className="service-section membership">
        <h2>Membership Plans</h2>
        <p>
          We offer flexible membership plans to suit your needs, whether you're
          looking for short-term access or a long-term commitment. Explore our
          options and find the plan that's right for you.
        </p>
       
        <button className="cta-button" onClick={handleNav}>View Membership Plans</button>
      </section>
    </div>
  );
};

export default Services;
