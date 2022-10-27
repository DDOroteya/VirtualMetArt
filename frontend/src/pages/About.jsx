import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="bg-[url('./media/about-background.jpg')] bg-cover h-screen flex flex-col">
      <h1 className="page-title text-white text-5xl my-4">About</h1>
      <h3 className="text-white">About The Met</h3>
      <p className="about-description text-white">
        The Metropolitan Museum of Art presents over 5,000 years of art from
        around the world for everyone to experience and enjoy. The Museum lives
        in two iconic sites in New York City—The Met Fifth Avenue and The Met
        Cloisters. Millions of people also take part in The Met experience
        online. Since its founding in 1870, The Met has always aspired to be
        more than a treasury of rare and beautiful objects. Every day, art comes
        alive in the Museum's galleries and through its exhibitions and events,
        revealing new ideas and unexpected connections across time and across
        cultures.
      </p>
    </div>
  );
}

export default About;
