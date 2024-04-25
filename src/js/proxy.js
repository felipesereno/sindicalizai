const corsAnywhere = require('cors-anywhere');

// Cria um servidor proxy com CORS Anywhere
const proxy = corsAnywhere.createServer({
    originWhitelist: [], // Permitir todos os domínios
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

// Inicia o servidor na porta especificada
const port = process.env.PORT || 8080;
proxy.listen(port, () => {
    console.log(`CORS Anywhere proxy running on port ${port}`);
});