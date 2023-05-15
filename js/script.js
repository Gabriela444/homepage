{
    const welcome = () => {
        console.log("Hello! Have a nice day. :)")
    }

    const hideShowSoapPhoto = () => {
        const js_photoSoap = document.querySelector(".js_photoSoap");

        js_photoSoap.classList.toggle("photo__hide");
        js_buttonSoap.innerText = js_photoSoap.classList.contains("photo__hide") ?
            "Pokaż zdjęcie" : "Ukryj zdjęcie";

    }


    const hideShowIncensePhoto = () => {
        const js_photoIncense = document.querySelector(".js_photoIncense");


        js_photoIncense.classList.toggle("photo__hide");
        js_buttonIncense.innerText = js_photoIncense.classList.contains("photo__hide") ?
            "Pokaż zdjęcie" : "Ukryj zdjęcie";

    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const button__themeName = document.querySelector(".button__themeName");

        body.classList.toggle("button__themeBlue");
        button__themeName.innerText = body.classList.contains("button__themeBlue") ? "zielony" : "niebieski";
    }


    const init = () => {
        const js_buttonSoap = document.querySelector(".js_buttonSoap");
        js_buttonSoap.addEventListener("click", hideShowSoapPhoto);

        const js_buttonIncense = document.querySelector(".js_buttonIncense");
        js_buttonIncense.addEventListener("click", hideShowIncensePhoto);

        const js_buttonTheme = document.querySelector(".js_buttonTheme");
        js_buttonTheme.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}