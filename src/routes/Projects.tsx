import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Project {
	id: string;
	name: string;
	description: string;
	primaryLanguage: string;
	url: string;
	homepageUrl?: string;
	imageUrl?: string;
}

const projectsData: Project[] = [
  {
	id: uuidv4(), 
    name: "VeganBot",
    description: "Este é um projeto desenvolvido para fornecer informações sobre veganismo utilizando uma API generativa do Google. O projeto é construído com React e Vite, oferecendo uma experiência rápida e interativa para os usuários.",
    primaryLanguage: "Node.js",
    url: "https://github.com/millenxs/veganbot-node",
    homepageUrl: "https://veganbot-node.vercel.app/",
    imageUrl: "/img-project/Veganbot.png",
  },
  {
    id: uuidv4(), 
    name: "Task Manager",
    description: "Este é um projeto de CRUD (Create, Read, Update, Delete) básico que criei utilizando PHP no backend, MySQL como banco de dados, JavaScript e TailwindCSS no front-end. O objetivo é criar uma aplicação web simples e funcional para gerenciar compromissos.",
    primaryLanguage: "PHP",
    url: "https://github.com/millenxs/task-manager",
    imageUrl: "/img-project/Task-manager.png",
  },
  {
    id: uuidv4(), 
    name: "Contact List",
    description: "Este é um projeto simples de uma aplicação web para gerenciamento de contatos, desenvolvida com HTML, CSS e JavaScript. A aplicação permite adicionar, editar, remover e pesquisar contatos de maneira eficiente e intuitiva.",
    primaryLanguage: "Javascript",
    url: "https://github.com/millenxs/contact-list",
    homepageUrl: "https://contact-list-two-phi.vercel.app/",
    imageUrl: "/img-project/Contact-list.png",
  },
  {
    id: uuidv4(), 
    name: "Bot Apostas - Telegram",
    description: "Este projeto é um bot que monitora jogos de futebol ao vivo e envia informações sobre partidas em andamento para um canal do Telegram. O bot utiliza Selenium para navegar em uma página da web de scanner de futebol ao vivo e envia mensagens com base em determinados critérios de análise de jogo.",
    primaryLanguage: "Python",
    url: "https://github.com/millenxs/bot-apostas-telegram",
    imageUrl: "/img-project/Bot-apostas.png",
  },
  {
    id: uuidv4(), 
    name: "TO-DO-LIST",
    description: "Este é um projeto de To-Do List simples e funcional, desenvolvido utilizando apenas HTML, CSS e JavaScript puro. Ele permite que você adicione, edite, pesquise e filtre suas tarefas, além de marcar como concluídas ou pendentes.",
    primaryLanguage: "Javascript",
    url: "https://github.com/millenxs/to-do-list",
	homepageUrl: "https://to-do-list-phi-kohl.vercel.app/",
    imageUrl: "/img-project/to-do-list.png",
  },
  {
    id: uuidv4(), 
    name: "Recipes Web - EM ANDAMENTO",
    description: "Este é um site de receitas web construído em **React** que utiliza a API pública do TheMealDB para buscar detalhes de receitas. O aplicativo permite aos usuários visualizar uma lista de receitas e obter informações detalhadas sobre cada uma delas.",
    primaryLanguage: "Typescript",
    url: "https://github.com/millenxs/recipes-web",
	homepageUrl: "https://recipes-web-three.vercel.app/",
    imageUrl: "/img-project/recipes-web.png",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    if (!filter) return true;
    if (filter === "Fullstack") {
      return ["Node.js", "PHP"].includes(project.primaryLanguage);
    } else if (filter === "Frontend") {
      return ["Typescript", "Javascript", "HTML/CSS"].includes(project.primaryLanguage);
    } else if (filter === "Python") {
      return project.primaryLanguage === "Python";
    }
    return project.primaryLanguage === filter;
  });

  return (
	<section id="projects">
	<div className="px-4 sm:px-6">
	  <p className="flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 text-[#e53939] rounded-full border-2 border-double border-[#e53939] transition-all">
		<span>Projetos</span>
	  </p>
	</div>
	<div className="px-4 m-4 p-4 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
	  <button onClick={() => setFilter("")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-red-600 hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Todos</button>
	  <button onClick={() => setFilter("Frontend")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-red-600 hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Frontend</button>
	  <button onClick={() => setFilter("Fullstack")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-red-600 hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Fullstack</button>
	  <button onClick={() => setFilter("Python")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-red-600 hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Python</button>

	</div>

	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mx-4">
	  {filteredProjects.map((project) => (
		<a
		  key={project.id}
		  href={project.url}
		  target="_blank"
		  rel="noopener noreferrer"
		  className="group relative block bg-black rounded-lg overflow-hidden h-60"
		>
		  {project.imageUrl && (
			<img
			  alt=""
			  src={project.imageUrl}
			  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
			/>
		  )}

		  <div className="relative p-4 sm:p-6 lg:p-8">
			<p className="text-sm font-medium uppercase tracking-widest text-red-500">{project.primaryLanguage}</p>

			<p className="text-xl font-bold text-white sm:text-2xl">{project.name}</p>

			<div className="mt-4">
			  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
				<p className="text-sm text-white">{project.description || "Sem descrição disponível"}</p>
			  </div>
			</div>

			<div>
			  <a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 hover:text-white"
			  >
				GitHub Repo
			  </a>
			  {project.homepageUrl && (
				<>
				  {" | "}
				  <a
					href={project.homepageUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:text-white"
				  >
					Visitar Deploy
				  </a>
				</>
			  )}
			</div>
		  </div>
		</a>
	  ))}
	</div>
  </section>
  );
};

export default Projects;
