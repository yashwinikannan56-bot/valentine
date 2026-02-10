// Generate floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  heart.style.width = heart.style.height = (10 + Math.random() * 20) + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create a heart every 300ms
setInterval(createHeart, 300);
function showLove() {
  document.getElementById("love").innerText =
    "sekkuram kalyanam panniko da venna❤️";
}
