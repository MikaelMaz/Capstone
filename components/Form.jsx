"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import Link from "next/link";

const EMAILJS_SERVICE_ID = "service_nhvlkzg";
const EMAILJS_TEMPLATE_ID = "template_3w951u6";
const EMAILJS_PUBLIC_KEY = "PDnKp7s_JTjuXetFy";

const Form = () => {
  const formRef = useRef(null);
  const emailInputRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State per controllare la visibilità del messaggio di successo

  const validateForm = (formValues) => {
    // Validazione dei campi del modulo
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.nome.trim()) errors.nome = "Il nome è richiesto";
    if (!formValues.telefono.trim())
      errors.telefono = "Il telefono è richiesto";
    else if (!/^\d+$/.test(formValues.telefono))
      errors.telefono = "Numero di telefono non valido";
    else if (
      formValues.telefono.trim().length < 10 ||
      formValues.telefono.trim().length > 11
    )
      errors.telefono = "Numero di telefono non valido";
    if (!formValues.mail.trim()) errors.mail = "L'email è richiesta";
    if (!formValues.messaggio.trim())
      errors.messaggio = "Il messaggio è richiesto";
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validazione della checkbox
    if (!privacyAccepted) {
      setFormErrors({ privacy: "Devi accettare la privacy per procedere" });
      return;
    }

    // Validazione dei campi del modulo
    const formValues = Object.fromEntries(new FormData(formRef.current));
    const errors = validateForm(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // Invio dell'email se tutti i campi sono validi
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      console.log("Email inviata con successo!");
      setSuccessMessage("Mail inviata con successo!");
      setShowSuccessMessage(true); // Mostra il messaggio di successo
      formRef.current.reset();
      setFormErrors({});
      emailInputRef.current.classList.remove("filled");
      setPrivacyAccepted(false);

      // Nascondi il messaggio di successo dopo 10 secondi
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000);
    } catch (error) {
      console.error("Invio email fallito...", error.text);
    }
  };

  const handleInputChange = (e) => {
    // Rimuovi l'errore associato all'input modificato
    const fieldName = e.target.name;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: undefined,
    }));

    // Verifica se l'input dell'email ha un valore
    if (fieldName === "mail") {
      const emailInput = e.target;
      if (emailInput.value.trim() !== "") {
        emailInput.classList.add("filled");
      } else {
        emailInput.classList.remove("filled");
      }
    }
  };

  const handlePrivacyCheckboxChange = () => {
    setPrivacyAccepted(!privacyAccepted);
    setFormErrors({});
  };

  return (
    <div className="col-lg-7 col-md-12 col-sm-12 mb-2 pt-3">
      <p className="fs-3 ps-3 py-0 mt-2 bordazz">
        Hai qualche domanda? Contattaci!
      </p>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="row toppete">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control inputto"
                id="exampleInputName1"
                name="nome"
                required
                onChange={handleInputChange}
              />
              <label htmlFor="exampleInputName1" className="form-label">
                <i className="bi bi-person-fill pe-2"></i>
                Nome e Cognome
              </label>
              {formErrors.nome && (
                <div className="alert error bubble-top">{formErrors.nome}</div>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 res">
            <div className="input-group">
              <input
                type="tel"
                className="form-control inputto"
                id="exampleInputPhone1"
                name="telefono"
                required
                onChange={handleInputChange}
              />
              <label htmlFor="exampleInputPhone1" className="form-label">
                <i className="bi bi-phone-fill pe-2"></i>
                Telefono
              </label>
              {formErrors.telefono && (
                <div className="alert error bubble-top">
                  {formErrors.telefono}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="input-group toppete">
          <input
            type="email"
            className="form-control inputto"
            id="exampleInputEmail1"
            name="mail"
            required
            ref={emailInputRef}
            onChange={handleInputChange}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            <i className="bi bi-envelope-fill pe-2"></i>
            Email
          </label>
          {formErrors.mail && (
            <div className="alert error bubble-top">{formErrors.mail}</div>
          )}
        </div>
        <div className="input-group toppete">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="messaggio"
            required
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <i className="bi bi-chat-left-text-fill pe-2"></i>
            Messaggio
          </label>
          {formErrors.messaggio && (
            <div className="alert error bubble-top">{formErrors.messaggio}</div>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center blocock">
          <div className="form-check pt-5 spax">
            <input
              type="checkbox"
              className="form-check-input check"
              id="privacyCheckbox"
              checked={privacyAccepted}
              onChange={handlePrivacyCheckboxChange}
            />
            <label
              className="form-check-label schifo"
              htmlFor="privacyCheckbox"
            >
              Accetto la{" "}
              <Link
                href="https://www.studiolegalerusso.it/privacy-policy.pdf"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </label>
            {formErrors.privacy && (
              <div className="alert errorino bubble-top">
                {formErrors.privacy}
              </div>
            )}
          </div>
          <button type="submit" className="btn toppete">
            Invia
          </button>
        </div>
        {showSuccessMessage && (
          <div className="alert dadio fade-in-out">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Form;
