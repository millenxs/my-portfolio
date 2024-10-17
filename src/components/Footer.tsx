import React from "react";
import './style/Footer.css';

export default function Footer() {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
		  section.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.warn(`Section with ID ${sectionId} not found.`)
		}
	  };

  return (
	<footer className="bg-base-100">
	<div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
	  <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
		<button
		  className="inline-block rounded-full p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400"
		  onClick={() => scrollToSection('hero')}
		>
		  <span className="sr-only">Back to top</span>
  
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			className="size-5"
			viewBox="0 0 20 20"
			fill="currentColor"
		  >
			<path
			  fillRule="evenodd"
			  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
			  clipRule="evenodd"
			/>
		  </svg>
		</button>
	  </div>
  
	  <div className="lg:flex lg:items-end lg:justify-between">
		<div>
 	  		<p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
			   Mesmo sem uma 'experiência formal' em tech, eu já trabalhei em um estágio no setor bancário, onde aprendi a me virar bem com comunicação, resolver pepinos e gerir meu tempo, o que, cá entre nós, me preparou super pra encarar um time ágil.		  </p>
		</div>
  
		<ul
		  className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
		>
		  <li>
			<button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent hover:text-white" onClick={() => scrollToSection('about-me')}> Sobre mim </button>
		  </li>
  
		  <li>
			<button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent hover:text-white" onClick={() => scrollToSection('experience')}> Experiência </button>
		  </li>
  
		  <li>
			<button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent hover:text-white" onClick={() => scrollToSection('projects')}> Projetos </button>
		  </li>
  
		  <li>
			<button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent hover:text-white" onClick={() => scrollToSection('contact')}> Contato </button>
		  </li>
		</ul>
	  </div>
  
	  <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
		Copyright &copy; 2022. All rights reserved.
	  </p>
	</div>
  </footer>
  );
}
