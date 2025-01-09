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
  { title: "Next.js", icon: nextIcon },
  { title: "Node.js", icon: nodeIcon },
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
    <div
      id="main_container"
      className="flex flex-col w-screen h-5/6 justify-center"
    >
      <section id="row_one" className="flex justify-between my-4">
        <div id="info_container" className="basis-1/3">
          <h1>Gregor Thomson</h1>
          <h2>London</h2>
          <ul className="flex">
            <li className="p-1">GitHub</li>
            <li className="p-1">LinkedIn</li>
            <li className="p-1">Email</li>
          </ul>
        </div>
        {openProject ? (
          <div id="project_open" className="basis-2/3">
            <h2>{openProject.title}</h2>
            <button onClick={() => setOpenProject(null)}>Close</button>
            {openProject.deployed ? (
              <a href={openProject.deployed}>Live</a>
            ) : null}
            <a href={openProject.repo}>Repo</a>
            <p>{openProject.description}</p>
          </div>
        ) : (
          <div id="projects_container" className="basis-2/3 flex flex-wrap">
            {projects.map((project, index) => (
              <div
                className="project flex flex-col basis-1/3 items-center text-center p-2"
                key={project.title}
                onClick={() => viewProject(index)}
              >
                <p>{project.title}</p>
                <p>{project.icon}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="row_two" className="flex justify-between my-4">
        <div id="sprite_container" className="basis-1/3">
          Sprite
        </div>
        <div id="stack_container" className="basis-2/3 flex flex-wrap">
          {stack.map((item) => (
            <div
              className="flex flex-col stack_item basis-1/6 items-center "
              key={item.title}
            >
              <Image src={item.icon} alt={item.title} className="max-w-16" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
