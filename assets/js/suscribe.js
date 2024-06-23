document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-suscription");
    form.addEventListener("submit", formSuscriptionSend);
});

const formSuscriptionSend = (event) => {
    event.preventDefault();
    const name = getValue("name");
    const email = getValue("email");
    consoleResult(name, email);
};

const getValue = (id) => document.getElementById(id).value;
const consoleResult = (name, email) => {
    console.log("Nombre: " + name);
    console.log("Correo: " + email);
};