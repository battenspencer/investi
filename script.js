function scrollBar(){
    fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5')
        .then(function(response) {
            return response.json();
        })
            .then (function (myJson) {
                let data = myJson.DISPLAY;

                let applePrice = myJson.AAPL.quote.latestPrice + " USD";
                let teslaPrice = myJson.TSLA.quote.latestPrice + " USD";
                let fbPrice = myJson.FB.quote.latestPrice + " USD";

                document.getElementById("scrollBar").innerHTML = `Apple (AAPL): ${applePrice} | ` + `Tesla (TSLA): ${teslaPrice} | ` + `Facebook (FB): ${fbPrice} | `;
            })
}

scrollBar();