/**
 * Hook personalizado para interagir com a camada de dados do Google Tag Manager.
 */
const useGTM = () => {
  /**
   * Envia um evento personalizado para o Google Tag Manager.
   *
   * @param {string} eventName O nome do evento.
   * @param {Object} eventPayload Um objeto contendo dados adicionais do evento.
   */
  const sendEvent = (eventName, eventPayload = {}) => {
    // Verifica se o dataLayer existe
    if (window.dataLayer) {
      // Constrói o objeto do evento
      const eventData = {
        event: eventName,
        ...eventPayload,
      };

      // Envia o evento para o dataLayer
      window.dataLayer.push(eventData);
    } else {
      console.warn("Google Tag Manager not initialized");
    }
  };

  return { sendEvent };
};

export default useGTM;
