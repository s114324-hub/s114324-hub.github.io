const dinners = [
  "Hot Pot ",
  "beef stew",
  "Ramen ",
  "fried rice",
  "Pizza ",
  "Burgers ",
  "curry",
  "pasta",
  "dumplings",
  "pho",
  "chicken rice",
  "sushi",

];

let rotation = 0;

function spin() {
  const wheel = document.getElementById("wheel");
  const result = document.getElementById("result");

  rotation += Math.floor(Math.random() * 360) + 720;
 wheel.style.transform = `translateY(-50%) rotate(${rotation}deg)`;

  const choice = dinners[Math.floor(Math.random() * dinners.length)];

  setTimeout(() => {
    result.textContent = `Tonight: ${choice}`;
  }, 2000);
}
