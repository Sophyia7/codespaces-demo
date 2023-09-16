/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to Deploy a Django App on Render 🎉",
    description:
      "A step-by-step guide to deploying a Django app on Render. This includes setting up a database, configuring environment variables, and more.",
    url: "https://www.freecodecamp.org/news/deploying-a-django-app-to-render/",
  },
  {
    title: "A FinTech API for Practice",
    description:
      "A simple API that allows users to create accounts, deposit and withdraw funds, and more.",
    url: "https://github.com/Sophyia7/Fintech-API",
  },
  {
    title: "Connect & Analyze Your Data with the Power BI API",
    description:
      "A step-by-step guide to connecting and analyzing your data with the Power BI API. This is a great way to get started with the Power BI API.",
    url: "https://adamtheautomator.com/power-bi-api/",
  },
  {
    title: "How to Set Up AWS Simple Email Service",
    description:
      "This is step-by-step guide to setting up AWS Simple Email Service. This includes setting up a database, configuring environment variables, and more.",
    url: "https://www.freecodecamp.org/news/set-up-aws-simple-email-service/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
