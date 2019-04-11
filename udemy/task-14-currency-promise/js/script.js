let inputRub = document.getElementById("rub"),
    inputUsd = document.getElementById("usd");
(async () => {
    let request = await fetch("https://www.cbr-xml-daily.ru/daily_json.js").catch(a => console.log(a.message));
    let data = await request.json();
    kurs = data.Valute.USD.Value, console.log(kurs), inputRub.addEventListener("input", () => {
        inputUsd.value = inputRub.value / kurs
    })
})().catch(a => console.log(a.message));