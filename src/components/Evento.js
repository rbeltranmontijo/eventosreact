import React from "react";

const Evento = ({ evento }) => {
  // extrar el text
  let { text } = evento.description;
  if (text) {
    if (text.length > 250) {
      text = text.substr(0, 250);
    } else {
      text = null;
    }
  }

  return (
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        {evento.log} ? <img src={evento.log.url} alt={evento.name} /> : null
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{evento.name.text}</h3>
      </div>
      <div className="uk-card-footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="uk-button uk-button-secondary"
          href={evento.url}
        >
          Mas información
        </a>
      </div>
    </div>
  );
};

export default Evento;
