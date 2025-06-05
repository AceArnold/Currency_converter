// let username
// username = window.prompt("Please enter your name:", "User");
// console.log(`Hello, ${username}!`);


let currency_from;
let currency_to;
let amount;

window.onload = function() {
    document.getElementById("submit").onclick = function(event) {
        event.preventDefault(); 

        currency_from = document.getElementById("fromCurrency").value.toUpperCase();
        currency_to = document.getElementById("toCurrency").value.toUpperCase();
        amount = Number(document.getElementById("amount").value);

        // console.log(`Converting from ${currency_from} to ${currency_to} an amount of ${amount}`);

        const currencies = {
                USD: 1.0,
                EUR: 0.8779,
                JPY: 143.81,
                GBP: 0.7379,
                AUD: 1.35,
                CAD: 1.26,
                CHF: 0.9331,
                CNY: 7.1,
                SEK: 10.3,
                NZD: 1.43,
                RUB: 74.36,
                RWF: 1400.86,
                NRA: 1200,
                SHL: 2900,
                ZAR: 18.3,
                KES: 160.2,
                GHS: 14.5,
                UGX: 3785,
                TZS: 2500,
                INR: 83.1,
                PKR: 277,
                BDT: 110.5,
                MAD: 10.2,
                EGP: 47.5,
                NGN: 1480
        };
        if (currencies[currency_from] && currencies[currency_to]) {
            var conv = (amount * currencies[currency_to]) / currencies[currency_from];
            document.getElementById("result").innerText = `Converted amount: ${conv.toFixed(2)} ${currency_to}`;
        } else {
            document.getElementById("result").innerText = "Currency not found!";
        }

        
        
    }
}