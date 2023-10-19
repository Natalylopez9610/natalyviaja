//alert("Hola este es mi Javascript");
let nombre1 ="Nataly"
console.log(nombre)
let contenidoTitulo = "Nataly";
let titulo =document .querySelector("titulo1");
console.log(titulo)
titulo.textContent="Nataly"
//condicionales
let textoTitulo = titulo.innerHTML
console.log(textoTitulo);
if(textoTitulo=="Nataly"){titulo.innerHTML="otro";}else{
    console.log("no se cumple")
}
//Funciones
let nombre ="Nataly"
let profesion="Negocios internacionales"
let Gusto= "chocolate"
let parrafo= document.querySelector("parrafo2")
function cambiartexto(nombre,ciudad,gusto){
    let contenido = "Mi Nombre es ${nombre} y tengo 27 años, soy profesional en ${profesion} me gusta ${gusto}, hacer yoga y viajar. Mi mayor interes es vivir y aprender cada dia mas ya que la sabiduria es algo escencial para mi vida, en mi pagina web podran ver todas mis aventuras y vivencias.";
return contenido    
}

//parrafo.innertext = cambiarTexto(nombre,profesion,gusto);
let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        index.html = document.querySelector(".mi_primera_web");
        index.htmlclassList.toggle("active");
      };

      const form = document.getElementById("form");
const nombre2 = document.getElementById("nombre");
const parrafo2 = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});