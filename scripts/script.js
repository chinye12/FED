const button = document.querySelector("header button");
const nav = document.querySelector("header nav");
const closeButton = document.querySelector("header nav > button");
const audio = new Audio(
  "audio/open_menu.mp3"
); /* Audio van: https://pixabay.com/sound-effects/080918-bolt-sliding-back-4-39863 en code van https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48 */
const checkbox = document.getElementById("checkbox");
const loader = document.getElementById("loadingScreen");

let banner = document.getElementById("actie");
let inputFields = document.querySelectorAll(".hidden");
let themeButton = document.getElementById("themeSwitch");



/* Menu openen en sluiten met geluid */
button.addEventListener("click", () => {
  nav.classList.toggle("active");
  audio.play();
});



closeButton.addEventListener("click", () => {
  nav.classList.remove("active");
  audio.play();
});



/* Header banner tekst veranderen - Hoe ik de interval moet bepalen van: https://www.w3schools.com/jsref/met_win_setinterval.asp */
setInterval(() => {
  if (banner.textContent === "Bespaar 50% op elke extra bril") {
    banner.textContent =
      "Koop een multifocale bril, krijg tweede montuur gratis";
  } else if (
    banner.textContent ===
    "Koop een multifocale bril, krijg tweede montuur gratis"
  ) {
    banner.textContent = "Gratis verzending op alle brillen";
  } else {
    banner.textContent = "Bespaar 50% op elke extra bril";
  }
}, 8000);



/* Extra invulvelden open en dichtklappen - met behulp van ChatGPT - Waarom klapt het niet open? (twee regel miste) */
checkbox.addEventListener("click", () => {
  inputFields.forEach((field) => {
    field.classList.toggle("active");
  });
});



/* Laadscherm */
window.addEventListener("load", function () {
  loader.style.display = "none";
});



/* Herst thema (de)activeren - code van: https://www.youtube.com/watch?v=zFFuV_vXNhY */
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("fallTheme");
});
