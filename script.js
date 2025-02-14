script.js

// Example: Fetch market cap data for Solana from CoinGecko API

window.onload = function() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            const marketCap = data.solana.usd;
            document.getElementById('marketcap').textContent = `$${marketCap} USD`;
        })
        .catch(error => {
            console.error('Error fetching market data:', error);
            document.getElementById('marketcap').textContent = 'Unable to fetch data';
        });
};
