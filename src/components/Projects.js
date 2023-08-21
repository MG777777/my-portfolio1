import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data.js";

export default function Projects() {
    return(
        <section id="projects" className="text-white body-font bg-bili bg-no-repeat bg-cover bg-center lg:w-auto md:w-auto sm:w-auto bgr " style={{marginLeft:'9rem'}}>
            
            <div className="container px-5 py-20 mx-auto text-center lg:px-40 sm:mx-auto">
                <div className="flex flex-col w-f mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm-text-4x1 text-3x1 font-medium title-font mb-4 text-white text-center">
                        Projects I've Built
                    </h1>
                </div>
                <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col item-center flex justify-center">
                    <div class="container mx-auto flex flex-wrap">
                    {projects.map((project) => (
                        <a href={project.link}
                            key={project.image} className="lg:w-1/4 md:w-1/2 w-full p-1">
                            <div className="flex relative">
                                {/* <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={project.image} /> */}
                                <div className="p-8 rounded-xl border border-gray-200 bg-purple-900 ">
                                <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-green-400 mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
              </div>
            </div>
        </section>
    );
}