import APIFeaturesShoes from "./utils/APIFeaturesShoes.js";
import SHOES from "./db/db.js";

let app = document.getElementById("typewriter");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Instituto Tecnológico de Tlalnepantla")
  .pauseFor(200)
  .deleteChars(10)
  .start();

let app1 = document.getElementById("lector");

let lector = new Typewriter(app1, {
  loop: true,
  delay: 75,
});

lector
  .pauseFor(2500)
  .typeString("LagaShoes")
  .pauseFor(200)
  .deleteChars(10)
  .start();

let app11 = document.getElementById("lector1");

let lector1 = new Typewriter(app11, {
  loop: true,
  delay: 75,
});

lector1
  .pauseFor(100)
  .typeString(
    "En LagaShoes, buscamos darte los mejores precios, aún sobre artículos de segunda mano. Si maltratado no esta, una segunda vida le puedes dar"
    
  )
  .pauseFor(100)
  .deleteChars(10)
  .start();

//////////////////////////////////////////////////////////////////////////////////
//INIT API
// const shoesAPI = new APIFeaturesShoes();

// const initApp = () => {
//   const shoes = shoesAPI.initAPIFeaturesShoes(SHOES);
// };

// initApp();

// SELECT CURRENT SHOES
// const categories = document.querySelectorAll(".card-group");

// categories.forEach((category) => {
//   category.addEventListener("click", (e) => {
//     const card = e.target.closest(".card");

//     if (!card) return;

//     const id = card.getAttribute("id");
//     console.log(id);
//     shoesAPI.currenShoes(id);
//   });
// });
