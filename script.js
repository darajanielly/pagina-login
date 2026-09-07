const email = document.getElementById ("email");
const senha = document.getElementById("senha");
const olho = document.getElementById("olho");
const formulario = document.getElementById("formulario");

olho.addEventListener("click", function () {
  
if (senha.type === "text") {
  senha.type="password"; 
}
else {
  senha.type="text";
}
  
});

formulario.addEventListener("submit", function (event) {

    if (email.value === "") {
    alert("Insira o email");
      event.preventDefault();
    return;
}

if (senha.value === "") {
    alert("Insira a senha");
     event.preventDefault();
    return;
}

alert("Login Realizado!");
});
