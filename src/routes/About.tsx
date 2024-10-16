import "./StyledRoutes/About.css";
import profileImage from "../../public/Foto_perfil.jpeg";

export default function About() {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
		  section.scrollIntoView({ behavior: 'smooth' });
		} 
	  };

  return (
    <section id="about-me">
      <div className="px-4 sm:px-6 mt-[5rem]" data-aos="fade-up">
        <p className="flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 text-[#e53939] rounded-full border-2 border-double border-[#e53939] transition-all">
          <span>Sobre Mim</span>
        </p>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center gap-8">
        <article className="rounded-xl p-4" data-aos="fade-right">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img
              alt="Foto de perfil"
              src={profileImage}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-medium text-white">
                Millena Medeiros
              </h3>
              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a
                      href="https://www.linkedin.com/in/millena-medeiros-76467b106/"
                      className="text-base font-medium text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="p-1 leading-none">
                    <a
                      href="https://www.instagram.com/millenameedeiros"
                      className="text-base font-medium text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="p-1 leading-none">
                    <a
                      href="/curriculo"
                      className="text-base font-medium text-gray-300"
                    >
                      Currículo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2 max-w-[500px]">
            <li>
				<h2 className="mb-4 text-lg">Ultimos Projetos:</h2>
              <a
                href="https://github.com/millenxs/veganbot-node"
                className="block h-full rounded-lg border border-red-500/30 p-4 hover:border-red-500/70"
              >
                <strong className="font-medium text-white">
                  VeganBot
                </strong>
                <p className="mt-1 text-xs font-medium text-gray-300">
				Este é um projeto desenvolvido para fornecer informações sobre veganismo utilizando uma API generativa do Google. O projeto é construído com React e Vite, oferecendo uma experiência rápida e interativa para os usuários.
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/millenxs/recipes-web"
                className="block h-full rounded-lg border border-red-500/30 p-4 hover:border-red-500/70"
              >
                <strong className="font-medium text-white">
                  RecipesWeb
                </strong>
                <p className="mt-1 text-xs font-medium text-gray-300">
				Este é um site de receitas web construído em **React** que utiliza a API pública do TheMealDB para buscar detalhes de receitas. O aplicativo permite aos usuários visualizar uma lista de receitas e obter informações detalhadas sobre cada uma delas.
                </p>
              </a>
            </li>
          </ul>
          <div className="mt-3">
		<button className="px-5">
          <span className="button-text slide" onClick={() => scrollToSection('projects')}>Ver todos os projetos</span>
        </button>
          </div>
        </article>
        <div className="h-auto lg:w-1/2" data-aos="fade-left">
          <span className="text-sm sm:text-lg">
            Sou formada em Análise e Desenvolvimento de Sistemas com foco em
            desenvolvimento front-end desde 2022. Aprimorei minhas habilidades
            em HTML5, CSS3, JavaScript, ReactJS e Tailwind CSS por meio de
            projetos pessoais e acadêmicos. Embora eu não tenha experiência
            formal em cargos de tecnologia, apliquei meu conhecimento em
            projetos como um aplicativo de gerenciamento de tarefas utilizando
            PHP e MySQL, e um site de receitas integrado a uma API pública,
            construído com Vite, ReactJS e Tailwind. Além disso, meu estágio no
            setor bancário fortaleceu minhas habilidades de comunicação,
            resolução de problemas e gestão de tempo, preparando-me para atuar
            em equipes de desenvolvimento ágeis.
          </span>
        </div>
      </div>
    </section>
  );
}
