import React from "react";
import "./topmenu.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function TopMenu() {
  const categories = [
    {
      name: "Highlights",
      description: "The projects that I've created or are working on",
      link: "#highlights",
      test: "highlight",
    },
    {
      name: "Contact",
      description: "Reach out to me",
      link: "#contact-form",
      test: "contact",
    },
    {
      name: "About Me",
      description: "Who am I",
      link: "#about",
      test: "about",
    },
    // {
    //     name: "resume",
    //     description: "a listing of my work experience"
    // },
    // {
    //     name:"education",
    //     description: "things I've done to better myself"
    // },
  ];

  function categorySelected() {
    window.location = categories.link;
    // alert("you clicked a button!");
  }

  return (
    <section>
      <Jumbotron
        className="branding grid-container"
        data-testid="link"
        href="/"
      >
        <p>
          <span
            role="img"
            aria-label="sparkles"
            src="../../assets/images/logo/sparkles_2728.png"
          >
            <h1>✨Jennifer!</h1>
          </span>
        </p>
      </Jumbotron>
      <div className="navigation">
        {categories.map((category, index) => (
          <Button href={category.link} key={index} data-testid={category.test} variant="primary" size="lg" id="button">
            <span>{category.name}</span>{" "}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default TopMenu;
