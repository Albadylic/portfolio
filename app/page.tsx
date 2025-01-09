"use client";
import { useState } from "react";
import Image from "next/image";

import nextIcon from "../public/icons/next.svg";
import nodeIcon from "../public/icons/node.svg";
import postgresqlIcon from "../public/icons/postgresql.svg";
import pythonIcon from "../public/icons/python.svg";
import reactIcon from "../public/icons/react.svg";
import typescriptIcon from "../public/icons/typescript.svg";

import githubIcon from "../public/icons/github.svg";
import gmailIcon from "../public/icons/gmail.svg";
import linkedinIcon from "../public/icons/linkedin.svg";

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
      className="flex flex-col justify-center flex-wrap p-4 bg-sky-900/50 rounded-lg m-1 min-w-max items-center"
    >
      <div id="info_container" className="my-4 flex justify-between w-full">
        <div>
          <h1 className="text-2xl">Gregor Thomson</h1>
          <p className="text-xl">Full Stack Developer</p>
          <p className="my-1">London</p>
        </div>
        <ul className="flex">
          <a href="https://github.com/Albadylic">
            <li className="m-2 max-w-10">
              <Image src={githubIcon} alt="github" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/gregor-t/">
            <li className="m-2 max-w-10">
              <Image src={linkedinIcon} alt="linkedin" />
            </li>
          </a>
          <a href="mailto:albadylic@gmail.com">
            <li className="m-2 max-w-10">
              <Image src={gmailIcon} alt="gmail" />
            </li>
          </a>
        </ul>
      </div>
      <section className="flex justify-center my-4">
        <div id="sprite_container" className="my-4 basis-1/3">
          Sprite
        </div>

        {openProject ? (
          <div
            id="project_open"
            className="flex my-4 bg-slate-800 rounded basis-2/3"
          >
            <div className="mx-2">
              <h2>{openProject.title}</h2>
              <div className="flex">
                <button onClick={() => setOpenProject(null)}>Close</button>
                {openProject.deployed ? (
                  <a href={openProject.deployed}>Live</a>
                ) : null}
                <a href={openProject.repo}>Repo</a>
              </div>
            </div>
            <p>{openProject.description}</p>
          </div>
        ) : (
          <div
            id="projects_container"
            className="grid grid-cols-3 my-4 basis-2/3"
          >
            {projects.map((project, index) => (
              <div
                className="project flex flex-col items-center text-center py-2 px-6 border-solid border-2  border-sky-200 m-1"
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
      <div id="stack_container" className="flex flex-wrap my-4">
        {stack.map((item) => (
          <div
            className="flex flex-col stack_item items-center border-solid border-2 border-sky-200 mx-2 p-6 rounded-full bg-slate-800/75 hover:bg-slate-300/50"
            key={item.title}
          >
            <Image src={item.icon} alt={item.title} className="max-w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
