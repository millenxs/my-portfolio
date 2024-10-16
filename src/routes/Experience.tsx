import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useInView } from 'react-intersection-observer';
import './StyledRoutes/Experience.css'; 

const timelineData = [
  {
    title: 'Co-Founder',
	subtitle: 'CodeInx Sites',
    description: 'A empresa CodeInx Sites é uma empresa no segmento de criação de sites utilizando Wordpress. No período em que atuei nesta empresa, tive as responsabilidades de: Liderar a criação e personalização de sites utilizando Wordpress / Javascript / PHP; Adquiri habilidades em design e desenvolvimento web para oferecer soluções de alta qualidade e eficientes; Gerenciei projetos do início ao fim, garantindo a integração de melhores práticas e a satisfação do cliente.',
    date: 'Março 2024',
  },
  {
    title: 'Estagiária',
	subtitle: 'Banco Santander',
    description: 'O Banco Santander é um banco global e o terceiro maior da américa latina. No período em que atuei nesta empresa, tive as responsabilidades de: Atender clientes e resolver problemas diretamente, utilizando habilidades analíticas para identificar e abordar necessidades; Gerenciar interações com clientes, fornecendo suporte e soluções eficazes, enquanto aprimorava processos para melhorar a eficiência e a satisfação; Analisar o mercado e comportamento do cliente.',
    date: 'Dez/22 - Jan/2024',
  },
];

const Experience: React.FC = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 }); 
	  }, []);
	
  return (
    <section id="experience">
      <div className="px-6 mt-[5rem]">
        <p className="flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 text-[#e53939] rounded-full border-2 border-double border-[#e53939] transition-all">
          <span>Experiência Profissional</span>
        </p>
      </div>
      <div className="timeline w-full max-w-[1000px] mx-auto my-12 p-8 box-border relative mb-20" >
        <ul className="p-0 m-0">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ item: { title: string; description: string; date: string; subtitle: string; } }> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <li ref={ref} data-aos="fade-up" className={`${inView ? 'fade-in' : 'fade-out'} relative w-[50%] px-10 box-border list-none`}>
      <div className="content pb-5">
        <h2 className="text-[#e53939] font-bold mt-8">{item.title}</h2>
		<h4 className="text-[#e53939] font-semibold">{item.subtitle}</h4>
        <p className="mt-2">{item.description}</p>
      </div>
      <div className="time absolute top-3 bg-[#e53939] text-white py-2 px-4 rounded-full shadow-md">
        <h4>{item.date}</h4>
      </div>
    </li>
  );
};

export default Experience;
