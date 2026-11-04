// Servidor de conexão (sinalização) só do Tela. Ele apenas apresenta um
// navegador ao outro; o vídeo vai direto entre os dois.
const { PeerServer } = require("peer");
const port = Number(process.env.PORT || 9000);
PeerServer({ port, host: "0.0.0.0", path: "/", proxied: true, allow_discovery: false, corsOptions: { origin: true } });
console.log("Servidor do Tela ouvindo na porta", port);
