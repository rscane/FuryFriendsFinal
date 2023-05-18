/* *Acción para que aparezca y desaparezca la lista en movil */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

// validacion formulario
function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if ((nombre === "" || email === "" || mensaje === "")) {
        alert("No te olvides de llenar todos los campos del formulario");
        return false
    }

    for (let i = 0; i < nombre.length; i++) {
        let letrasEnNombre = nombre.charCodeAt(i);
        if (!((letrasEnNombre >= 65 && letrasEnNombre <= 90) || (letrasEnNombre >= 97 && letrasEnNombre <= 122) || letrasEnNombre === 32)) {
            alert("El campo nombre solo acepta letras mayúsculas y minúsculas, no tildes ni caracteres especiales ");
            return false;
        }
    }

alert("Tu mensaje fue enviado correctamente!");
return true;
}

