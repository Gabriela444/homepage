

let js_buttonSoap = document.querySelector(".js_buttonSoap");
let js_photoSoap = document.querySelector(".js_photoSoap");

let js_buttonIncense = document.querySelector(".js_buttonIncense");
let js_photoIncense = document.querySelector(".js_photoIncense");

let js_buttonTheme = document.querySelector(".js_buttonTheme");
let body = document.querySelector(".body");
let button__themeName = document.querySelector(".button__themeName");

js_buttonSoap.addEventListener("click", () => {
    js_photoSoap.classList.toggle("photo__hide");
    js_buttonSoap.innerText = js_photoSoap.classList.contains("photo__hide") ?
        "Pokaż zdjęcie" : "Ukryj zdjęcie";
});

js_buttonIncense.addEventListener("click", () => {
    js_photoIncense.classList.toggle("photo__hide");
    js_buttonIncense.innerText = js_photoIncense.classList.contains("photo__hide") ?
        "Pokaż zdjęcie" : "Ukryj zdjęcie";
});

js_buttonTheme.addEventListener("click", () => {
    body.classList.toggle("button__themeBlue");
    if (body.classList.contains("button__themeBlue")) {
        button__themeName.innerText = "zielony";
    } else {
        button__themeName.innerText = "niebieski";
    }
});