document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-sing-up");
    form.addEventListener("submit", formSingUpSend);
});

const formSingUpSend = (event) => {
    event.preventDefault();
    const email = getValue("email");
    const password = getValue("password");
    consoleResult(email, password);
};

const getValue = (id) => document.getElementById(id).value;
const consoleResult = (email, password) => {
    console.log("Correo: " + email);
    console.log("Contraseña: " + password);
};