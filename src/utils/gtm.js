/**
 * Generate Google Tag Manager snippet to be insert in <head>
 * @param {string} id - Google Tag Manager Id
 * @returns {string} Google tag manager container snippet
 */
const gtmScript = (id) => `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');
`;

/**
 * Gera o iframe do Google Tag Manager para ser inserido dentro de um <noscript>
 * no início do <body>. Isso permite que o GTM carregue mesmo se o JavaScript estiver desabilitado.
 * @param {string} id - O ID do contêiner do GTM.
 * @returns {string} O snippet de iframe do GTM.
 */
const gtmIframe = (id) => `
  <iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
`;

export { gtmScript, gtmIframe };
