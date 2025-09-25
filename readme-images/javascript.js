const openButton = document.getElementById("openMenuButton");
const sluitButton = document.getElementById("closeMenuButton");
const deNav = document.getElementById("hamburgerMenu");

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

function openMenu(){
  deNav.classList.add("toonMenu");
  console.log("jo");
}

function sluitMenu(){
  deNav.classList.remove("toonMenu");
}