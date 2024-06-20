import React, { useState } from "react";
import "./portfolio.css";
import blueShirtGreyBack from "./../../img/blueShirtGreyBack.jpg";
import PortfolioItem from "../portfolioItem/portfolioItem";

function Portfolio() {
  const [activeFilters, setActiveFilters] = useState([]);

  const filters = [
    "Java",
    "React",
    "Python",
    "AWS",
    "SQL",
    "Jenkins",
    "Azure",
    "SpringBoot",
    "Firebase"
  ];

  const portfolioItems = [
    {
      imgLocation: blueShirtGreyBack,
      title: "Project Title 1",
      description: "This is a description of the project.",
      tags: ['React', 'JavaScript', 'CSS']
    },
    {
      imgLocation: blueShirtGreyBack,
      title: "Project Title 2",
      description: "This is a description of the project.",
      tags: ['Java', 'SQL', 'SpringBoot']
    },
    {
      imgLocation: blueShirtGreyBack,
      title: "Project Title 3",
      description: "This is a description of the project.",
      tags: ['React', 'Azure', 'Python']
    }
  ];

  const toggleFilter = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredPortfolioItems = portfolioItems.filter(item =>
    activeFilters.length === 0 || activeFilters.every(filter => item.tags.includes(filter))
  );

  return (
    <div className="portfolioWhole">
      <div className="Filters">
        <div className="list">
          <h3>My Portfolio</h3>
          <h6>Filters</h6>
          <ul>
            {filters.map((filter) => (
              <li
                key={filter}
                className={activeFilters.includes(filter) ? "active" : ""}
                onClick={() => toggleFilter(filter)}
              >
                <span>{filter}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {filteredPortfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          imgLocation={item.imgLocation}
          title={item.title}
          description={item.description}
          tags={item.tags}
        />
      ))}
    </div>
  );
}

export default Portfolio;
