"use client";
import { useState } from "react";
import Image from "next/image";

import nextIcon from "../public/stack_icons/next.svg";
import nodeIcon from "../public/stack_icons/node.svg";
import postgresqlIcon from "../public/stack_icons/postgresql.svg";
import pythonIcon from "../public/stack_icons/python.svg";
import reactIcon from "../public/stack_icons/react.svg";
import typescriptIcon from "../public/stack_icons/typescript.svg";

const projects = [
  {
    title: "Recipe Sage",
    deployed: "https://recipe-viewer-six.vercel.app/",
    repo: "https://github.com/Albadylic/recipe-viewer",
    description:
      "Using OpenAI's API to generate a recipe when a user uploads an image of a meal.",
    icon: "🥘",
  },
  {
    title: "Pokemon Trumps",
    deployed: "https://albadylic.github.io/pokemon-trumps/",
    repo: "https://github.com/Albadylic/pokemon-trumps",
    description: "Pokemon Top Trumps built with React and Typescript",
    icon: "🃏",
  },
  {
    title: "Data Scraper",
    deployed: "",
    repo: "https://github.com/Albadylic/py-pokemon-getter",
    description:
      "A Python scraper which grabs data on Gen 3 Pokemon from the Pokemon API.",
    icon: "🐍",
  },
  {
    title: "Joke Generator",
    deployed: "https://ai-joke-generator-swart.vercel.app/",
    repo: "https://github.com/Albadylic/ai-joke-generator",
    description:
      "An AI joke generator built with Next.js, Typescript and using OpenAI's API.",
    icon: "🤣",
  },
  {
    title: "Shrek Chat",
    deployed: "https://shrek-chat.onrender.com/",
    repo: "https://github.com/Albadylic/shrek-chat/",
    description:
      "A full-stack application using React and Python. The app uses RAG to enable the user to ask any question about the movie Shrek.",
    icon: "🧅",
  },
  {
    title: "Learnset Checker",
    deployed: "https://albadylic.github.io/gen-iii-learnset/",
    repo: "https://github.com/Albadylic/gen-iii-learnset",
    description:
      "A tool to check a Pokemon's Gen 3 learnset built with React and Typescript.",
    icon: "💪",
  },
];

const stack = [
  { title: "React", icon: reactIcon },
  { title: "Next", icon: nextIcon },
  { title: "Node", icon: nodeIcon },
  { title: "Typescript", icon: typescriptIcon },
  { title: "Python", icon: pythonIcon },
  { title: "SQL", icon: postgresqlIcon },
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
        <div id="project_open" className="col-span-2">
          <h2>{openProject.title}</h2>
          <button onClick={() => setOpenProject(null)}>Close</button>
          {openProject.deployed ? (
            <a href={openProject.deployed}>Live</a>
          ) : null}
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
            <Image src={item.icon} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
