const container = document.querySelector(".container");
const unsplash = "https://source.unsplash.com/random/";
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplash}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}
function getRandomSize() {
  return Math.floor(Math.random() * 10) + 30;
}
