import React from "react";
import "./faq.css";
import AccordionFAQ from "@/components/AccordionFAQ";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="container pt-5">
      <div className="mb-2 pt-3 mt-3">
        <p className="fs-3 ps-3 py-0 mt-2 bordazz">Domande Frequenti</p>
      </div>
      <AccordionFAQ />
      <div className="mb-2 pt-5 mt-5 ilrosso">
        <p className="fs-3 ps-3 py-0 mt-2 bordazz">Hai altre domande? <Link href="/contatti" className="piss">Contattaci!</Link></p>
      </div>
    </div>
  );
};

export default Faq;
