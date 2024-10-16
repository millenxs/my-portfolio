import "./style/Cards.css";

export default function Cards() {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
		  section.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.warn(`Section with ID ${sectionId} not found.`)
		}
	  };
  
	return (
    <div className="flex flex-col gap-8 md:flex-row justify-center mt-9 py-4 px-4" data-aos="fade-right">
      <div>
        <button className="learn-more" onClick={() => scrollToSection('about-me')}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Sobre Mim</span>
        </button>
      </div>

      <div>
        <button className="learn-more" onClick={() => scrollToSection('experience')}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Experiência</span>
        </button>
      </div>

      <div>
        <button className="learn-more" onClick={() => scrollToSection('projects')}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Projetos</span>
        </button>
      </div>

      <div>
        <button className="learn-more" onClick={() => scrollToSection('contact')}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Contato</span>
        </button>
      </div>
    </div>
  );
}
