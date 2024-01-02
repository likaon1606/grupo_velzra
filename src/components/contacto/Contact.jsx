import React from "react";
import ContactForm from "./ContactForm";

import "../../styles/contact.css";

export const Contact = () => {
  return (
    <>
      <div className="title-form">
        <h1>Llena el siguiente formulario</h1>
      </div>
      <ContactForm />
    </>
  );
};
