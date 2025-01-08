"use client";
import { useState } from "react";

const projects = [
  {
    title: "Recipe Sage",
    deployed: "",
    repo: "",
    description: "blah",
    icon: "x",
  },
  {
    title: "Pokemon Trumps",
    deployed: "",
    repo: "",
    description: "blah",
    icon: "x",
  },
  {
    title: "Data Scraper",
    deployed: "",
    repo: "",
    description: "blah",
    icon: "x",
  },
  {
    title: "Joke Generator",
    deployed: "",
    repo: "",
    description: "blah",
    icon: "x",
  },
  {
    title: "Storyteller",
    deployed: "",
    repo: "",
    description: "blah",
    icon: "x",
  },
  {
    title: "Learnset Checker",
    deployed: "",
    repo: "",
    description: "blah",
    icon: "x",
  },
];

const stack = [
  { title: "React", icon: "x" },
  { title: "Next", icon: "x" },
  { title: "Node", icon: "x" },
  { title: "Python", icon: "x" },
  { title: "SQL", icon: "x" },
];

export default function Home() {
  const [openProject, setOpenProject] = useState<null | {
    title: string;
    deployed: string;
    repo: string;
    description: string;
    icon: string;
  }>(null);

  function viewProject(index: number) {
    setOpenProject(projects[index]);
  }

  return (
    <div id="main_container" className="grid grid-cols-3 gap-4">
      <div id="info_container">
        <h1>Gregor Thomson</h1>
        <h2>London</h2>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </div>
      {openProject ? (
        <div className="project_open">
          <h2>{openProject.title}</h2>
          <button onClick={() => setOpenProject(null)}>Close</button>
          <a href={openProject.deployed}>Live</a>
          <a href={openProject.repo}>Repo</a>
          <p>{openProject.description}</p>
        </div>
      ) : (
        <div id="projects_container" className="col-span-2">
          {projects.map((project, index) => (
            <div
              className="project"
              key={project.title}
              onClick={() => viewProject(index)}
            >
              <p>{project.title}</p>
              <p>{project.icon}</p>
            </div>
          ))}
        </div>
      )}
      <div id="sprite_container">Sprite</div>
      <div id="stack_container" className="col-span-2">
        {stack.map((item) => (
          <div className="stack_item" key={item.title}>
            <img src={item.icon} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
