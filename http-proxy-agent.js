var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
    context: '/api',
    target: 'https://trushil-dictionary-back-end.herokuapp.com',
    secure: false
}];

function setupForCorporateProxy(proxyConfig) {
    var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY || 'https://trushil-dictionary-back-end.herokuapp.com';
    if (proxyServer) {
        var agent = new HttpsProxyAgent(proxyServer);
        console.log('Using corporate proxy server: ' + proxyServer);
        proxyConfig.forEach(function(entry) {
            entry.agent = agent;
        });
    }
    console.log(process.env.HTTP_PROXY, process.env.http_proxy)
    return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
