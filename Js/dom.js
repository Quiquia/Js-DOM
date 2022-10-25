// console.log(window);
// console.log(document);
// let texto = "tu puedes vanessa no te des por vencido por tu flojera ";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);

/*console.log("*********Elementos del Documento***********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.html); //undefined
console.log(document.documentElement); //html pero no te trae el tipo de documento
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000); 

document.write("<h2> Hola mundo desde el DOM </h2>"); // lo escribe al final antes de cerrar el body
*/

/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("Nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/

/* 
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-PE");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); // para evitar jaqueos, decirle que no tiene que ver con la otra pagina
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); // map
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo del Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
*/

/*
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style); // te muestra los estilos que tu le haz puesto
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); //Valor por defecto que le da el css
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variable CSS -custom Properties CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "green");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);

*/
/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.classList); //Devuelve un DOMTOKENLIST
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45"); //add:agrega la clase
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45"); //remove:quita la clase
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); // toggle : quita o agrega la clase si tiene le quita y sino tiene le pone.
console.log($card.classList.contains("rotate-45")); // evalua que tiene una clase
$card.classList.toggle("rotate-45"); // toggle : quita o agrega la clase si tiene le quita y sino tiene le pone.
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
*/

/*
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

//Agregar atributos dentro una etiqueta
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "animals");

//Agregar selectores dentro de una etiqueta
$figure.classList.add("card");

//Anidar una etiqueta dentro de otro
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);
$cards.appendChild($figure);

//Crear una tarjeta con .innerHTML pero en formato texto. no es un NODE
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People" />
<figcaption>Personas</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//crear una lista en el body

const estaciones = ["Primavera", "Verano", "Invierno", "Otoño"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((element) => {
  const $li = document.createElement("li");
  $li.textContent = element;

  $ul.appendChild($li);
});

//segunda lista con innerHTML

const continente = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continente.forEach((element) => ($ul2.innerHTML += `<li>${element}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment(); //almacena dinamicamente
//utilizar los fragmentos es mas obtima para agilizar la información
//aqui no se puede usar el .innerHTML
meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;

  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); 

*/

/* clase 69 
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
    {
      title: "Personas",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

*/

/* clase 70 


const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]); // remplaza el elemento
//$cards.removeChild($cards.lastElementChild); // elimina el elemento que le dices
//$cards.insertBefore($newCard, $cards.firstElementChild); // agrega elemento al inicio

document.body.appendChild($cloneCards);

*/

/* clase 71

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any" />
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterend", "Anny");
//$cards.insertAdjacentElement("afterend", $newCard);

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard);

*/

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(Event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

// $eventoSemantico.onclick = holaMundo(); // se ejecuta inmediatamente
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Multiples");

  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

// $eventoMultiple.addEventListener("click", saludar); // sale un console.log(event)
// La solución para ejecutar los parametros sería a traves de función anonima o arrow function
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Vanessa");
});

//función expresada, se tiene que guardar en una function para ejecutar removeEventListener
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
