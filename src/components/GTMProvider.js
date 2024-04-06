import React, { createContext, useContext, useEffect } from "react";
import { gtmScript, gtmIframe } from "../utils/gtm";

const GTMContext = createContext();

export const useGTMContext = () => useContext(GTMContext);

export const GTMProvider = ({ children, id }) => {
  useEffect(() => {
    // Função para adicionar o script do GTM ao <head>
    const addGtmScript = () => {
      const script = document.createElement("script");
      script.innerHTML = gtmScript(id);
      document.head.appendChild(script);
    };

    // Função para adicionar o iframe do GTM ao <body> usando <noscript>
    const addGtmIframe = () => {
      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    };

    // Verificar se o GTM já foi adicionado para evitar duplicatas
    if (!window.dataLayer || window.dataLayer["gtm.id"] !== id) {
      addGtmScript();
      addGtmIframe();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer["gtm.id"] = id; // Marcar que o GTM foi adicionado
    }
  }, [id]);

  // O valor do contexto poderia ser expandido para incluir funções que manipulam a camada de dados
  const value = {};

  return <GTMContext.Provider value={value}>{children}</GTMContext.Provider>;
};
