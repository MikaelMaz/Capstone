import React from "react";
import "./AccordionFaq.css";
import Link from "next/link";
const AccordionFAQ = () => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <span className="accordion-title">
                Quanto costa una revisione generale della moto?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Il costo di una revisione generale della moto può variare a
                seconda del modello della moto e del tipo di servizio richiesto.
                In media, potrebbe costare{" "}
                <span className="bald">tra 100 e 300 euro</span>. Per un
                preventivo più preciso,{" "}
                <Link href="/contatti" className="contattaci">
                  contattaci
                </Link>{" "}
                o vienici a trovare in negozio!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <span className="accordion-title">
                Quali sono i segnali di avvertimento che la mia moto potrebbe
                avere bisogno di manutenzione?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Alcuni segnali di avvertimento potrebbero essere:{" "}
                <span className="bald">rumori insoliti</span>,{" "}
                <span className="bald">perdite di fluido</span>,{" "}
                <span className="bald">diminuzione delle prestazioni</span>,
                <span className="bald"> problemi di avviamento</span>, o{" "}
                <span className="bald">luci di avvertimento sul cruscotto</span>
                . Se noti uno di questi segnali, è consigliabile portare la tua
                moto in officina per un controllo più approfondito.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <span className="accordion-title">
                Quanto tempo richiede una sostituzione dell'olio e del filtro
                dell'olio?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                {" "}
                La sostituzione dell’olio e del filtro dell’olio di solito
                richiede <span className="bald">circa un’ora</span>. Tuttavia,
                il tempo può variare a seconda del modello della moto e delle
                specifiche del produttore.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <span className="accordion-title">
                Quali sono i controlli di sicurezza che dovrei fare regolarmente
                sulla mia moto?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                {" "}
                I controlli di sicurezza regolari dovrebbero includere: la
                <span className="bald"> verifica del livello dell'olio</span>,
                la <span className="bald"> pressione degli pneumatici</span>, il
                <span className="bald"> funzionamento delle luci</span>, il{" "}
                <span className="bald">funzionamento dei freni</span>, e la
                <span className="bald"> tensione della catena</span>. Questi
                controlli possono essere effettuati a casa, ma per una verifica
                più approfondita, è consigliabile portare la moto in negozio.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <span className="accordion-title">
                Come posso prolungare la durata di vita della batteria della
                moto?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Per prolungare la durata della batteria, è importante mantenere
                la moto in un <span className="bald">luogo asciutto</span> e{" "}
                <span className="bald">caldo</span>,{" "}
                <span className="bald">evitare</span> di lasciare la{" "}
                <span className="bald">
                  moto inattiva per lunghi periodi di tempo
                </span>
                , e <span className="bald">utilizzare</span> un{" "}
                <span className="bald">mantenitore di carica</span> quando la
                moto non viene utilizzata.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <span className="accordion-title">
                Quali sono i segni di un sistema di frenata che necessita di
                manutenzione?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Se noti che i freni della tua moto sono{" "}
                <span className="bald">meno reattivi del solito </span>, o se
                senti dei <span className="bald">rumori quando freni </span>,
                potrebbe essere il momento di portare la moto nella nostra
                officina per un controllo più approfondito.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <span className="accordion-title">
                Quali sono le differenze tra i vari tipi di pneumatici per moto?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                I pneumatici per moto si differenziano in base a vari fattori
                come il tipo di <span className="bald">gomma</span>, il disegno
                del <span className="bald">battistrada</span> e la{" "}
                <span className="bald">dimensione</span>. Quelli{" "}
                <span className="bald">sportivi</span>, sono progettati per
                offrire massime prestazioni su strada e pista, con un’
                <span className="bald">ottima aderenza</span> anche in
                condizioni di forte inclinazione. Quelli da{" "}
                <span className="bald">turismo</span>, invece, sono progettati
                per garantire <span className="bald">comfort e durata</span>,
                ideali per viaggi lunghi. I pneumatici da{" "}
                <span className="bald">enduro</span> sono specifici per l’uso{" "}
                <span className="bald">fuoristrada</span>, con un battistrada
                aggressivo per una{" "}
                <span className="bald">trazione ottimale</span>{" "}
                su terreni sconnessi. Ricorda, la scelta del pneumatico giusto è
                fondamentale per la sicurezza e le prestazioni della tua moto,{" "}
                <Link href="/contatti" className="contattaci">
                  contattaci
                </Link>{" "}
                o passa in negozio per saperne di più!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <span className="accordion-title">
                Quali sono i principali componenti della moto che devo
                ispezionare prima di un lungo viaggio?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Prima di un lungo viaggio, dovresti ispezionare gli{" "}
                <span className="bald">pneumatici</span>,{" "}
                <span className="bald">freni</span>,{" "}
                <span className="bald">luci</span>,{" "}
                <span className="bald">catena</span>,{" "}
                <span className="bald">olio</span>
                <span className="bald">motore</span>,{" "}
                <span className="bald">liquido di raffreddamento</span>, e{" "}
                <span className="bald">batteria</span>. Se noti qualsiasi
                problema, ti consigliamo di portare la moto nel nostro negozio
                per garantirti con certezza un'ottima partenza.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              <span className="accordion-title">
                Come posso migliorare l'efficienza del consumo di carburante
                della mia moto?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Mantenere la moto in buone condizioni è fondamentale per
                migliorare l’efficienza del carburante. Questo include la{" "}
                <span className="bald">manutenzione regolare del motore</span>,
                la{" "}
                <span className="bald">
                  corretta pressione degli pneumatici
                </span>
                , e l’
                <span className="bald">
                  uso di un olio motore di alta qualità
                </span>
                . Inoltre cerca di{" "}
                <span className="bald">
                  evitare accelerazioni e frenate brusche
                </span>{" "}
                per risparmiare ancora più carburante.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >
              <span className="accordion-title">
                Cosa posso fare per proteggere la mia moto durante l'inverno o
                quando non la uso per un lungo periodo?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Per proteggere la tua moto durante l’inverno o quando non la usi
                per un lungo periodo, è consigliabile conservarla in un{" "}
                <span className="bald">luogo asciutto e coperto</span>. È
                importante <span className="bald">pulire</span> e{" "}
                <span className="bald">lubrificare</span> la{" "}
                <span className="bald">catena</span>, e coprire la moto con una{" "}
                <span className="bald">copertura per moto</span> per{" "}
                <span className="bald">proteggerla da polvere e umidità</span>.
                Inoltre, è consigliabile{" "}
                <span className="bald">rimuovere la batteria</span> e{" "}
                <span className="bald">conservarla in un luogo caldo</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEleven"
              aria-expanded="false"
              aria-controls="flush-collapseEleven"
            >
              <span className="accordion-title">
                Come posso mantenere la catena della mia moto lubrificata e
                pulita?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseEleven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Per mantenere la catena della tua moto lubrificata e pulita, è
                importante <span className="bald">pulirla regolarmente</span>{" "}
                con un{" "}
                <span className="bald">
                  detergente specifico per catene di moto
                </span>{" "}
                e <span className="bald">applicare</span> un{" "}
                <span className="bald">lubrificante adatto</span>. Questo aiuta
                a ridurre l’usura e a mantenere la catena in buone condizioni.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwelve"
              aria-expanded="false"
              aria-controls="flush-collapseTwelve"
            >
              <span className="accordion-title">
                Come posso preparare la mia moto per una gara o un evento
                sportivo?
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwelve"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Per preparare la tua moto per una gara o un evento sportivo, è
                importante iniziare con un{" "}
                <span className="bald">controllo generale</span>. Questo
                significa assicurarsi che la moto sia in buone condizioni,
                controllando i <span className="bald">freni</span>, le{" "}
                <span className="bald">luci</span> e i{" "}
                <span className="bald">pneumatici</span> e verificando che non
                ci siano perdite di <span className="bald">olio</span> o di{" "}
                <span className="bald">liquido di raffreddamento</span>.
                Ricorda,{" "}
                <span className="bald">
                  la nostra officina è specializzata nella preparazione delle
                  moto per gare ed eventi sportivi
                </span>
                . Siamo qui per aiutarti a ottenere il massimo dalla tua moto.
                Per altre info{" "}
                <Link href="/contatti" className="contattaci">
                  contattaci
                </Link>{" "}
                o vienici a trovare in negozio!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionFAQ;
