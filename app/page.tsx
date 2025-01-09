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
    title: "Pokémon Trumps",
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
      className="flex flex-col justify-center flex-wrap  bg-white-stripes rounded-lg m-1 min-w-min items-center w-[850px]"
    >
      <div
        id="info_container"
        className="my-4 flex justify-between items-center w-full bg-sky-stripes py-2 px-4"
      >
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

      <section className="flex justify-center items-center my-2 w-full py-2 px-4">
        <div id="sprite_container" className="my-4 basis-1/3">
          Sprite
        </div>

        {openProject ? (
          <div
            id="project_open"
            className="h-52	flex flex-col my-4 rounded basis-2/3 py-3 px-4 border-solid border-2  border-sky-900 bg-slate-800"
          >
            <h2 className="text-xl m-2">{openProject.title}</h2>
            <div className="mx-2 flex">
              <div className="flex flex-col basis-1/4">
                <p
                  className="cursor-pointer hover:text-sky-500"
                  onClick={() => setOpenProject(null)}
                >
                  Close
                </p>
                {openProject.deployed ? (
                  <a className="hover:text-sky-500" href={openProject.deployed}>
                    Live
                  </a>
                ) : null}
                <a className="hover:text-sky-500" href={openProject.repo}>
                  Repo
                </a>
              </div>
              <p className="basis-3/4">{openProject.description}</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl w-full bg-slate-800 p-1">Projects</h2>
            <div
              id="projects_container"
              className="grid grid-cols-3 my-4 basis-2/3"
            >
              {projects.map((project, index) => (
                <div
                  className="project flex flex-col items-center justify-center text-center py-3 px-4 border-solid border-2  border-sky-900 m-1 cursor-pointer bg-slate-800 hover:bg-slate-200/70 hover:text-slate-900"
                  key={project.title}
                  onClick={() => viewProject(index)}
                >
                  <p>{project.title}</p>
                  <p>{project.icon}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <div
        id="stack_container"
        className="flex flex-wrap justify-center my-4 bg-sky-stripes w-full p-2"
      >
        {stack.map((item) => (
          <div
            className="flex flex-col stack_item justify-center border-solid border-2 border-sky-200 mx-2 my-1 p-6 rounded-full bg-slate-800/75 hover:bg-slate-300/50"
            key={item.title}
          >
            <Image src={item.icon} alt={item.title} className="max-w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
