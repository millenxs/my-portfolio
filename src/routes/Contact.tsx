import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importando EmailJS
import "./StyledRoutes/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Aqui você envia o email usando o EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_o39t20f",
        "template_srzza8z",
        templateParams,
        "Mj8biUOP5YG5l4FEr"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section id="contact">
      <div className="px-4 sm:px-6 mt-[5rem]" data-aos="fade-up">
        <p className="card-title flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 rounded-full border-2 transition-all">
          <span className="relative z-10">Contato</span>
        </p>
      </div>
      <div className="overflow-hidden bg-base-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <p className="hidden text-white md:mt-4 md:block">
              <div className="flex items-start gap-4">
                <img
                  src="/Foto_perfil.jpeg"
                  alt=""
                  className="h-20 rounded-lg object-cover"
                />

                <div>
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Entre em contato
                  </h2>

                  <p className="mt-0.5 text-white">
				  Estou sempre na busca de aprender mais e desenvolver coisas maneiras!                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">Como posso te ajudar?</label>
              <textarea
                name="textarea"
                id="textarea"
                rows={10}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <button className="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
