
const heartField = document.getElementById("heart-field");
const music = document.getElementById("bg-music");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// Floating hearts animation
function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = ["♡", "♥", "💕", "✧"][
    Math.floor(Math.random() * 4)
  ];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heart.style.animationDuration = (6 + Math.random() * 6) + "s";
  heartField.appendChild(heart);

  setTimeout(() => heart.remove(), 12500);
}

setInterval(makeHeart, 650);

// Open birthday surprise
document.getElementById("open-surprise")
  .addEventListener("click", () => {
    document.getElementById("cake-section")
      .scrollIntoView({ behavior: "smooth" });

    music.play()
      .then(() => showToast("A little music, just for you 🎶"))
      .catch(() => showToast(
        "Add romantic-music.mp3 to hear music 🎵"
      ));
  });

// Birthday candles
const candles = [...document.querySelectorAll(".candle")];

candles.forEach(candle => {
  candle.addEventListener("click", () => {
    candle.classList.toggle("blown");

    if (candles.every(c => c.classList.contains("blown"))) {
      document.getElementById("wish-message").textContent =
        "Wish made! May all your dreams come true 🤍";

      showToast("Make a wish, birthday girl! ✨");

      for (let i = 0; i < 24; i++) {
        setTimeout(makeHeart, i * 70);
      }
    }
  });
});

// Make a wish button
document.getElementById("wish-btn")
  .addEventListener("click", () => {
    document.getElementById("wish-message").textContent =
      "I hope every beautiful wish finds its way to you. 🤍";

    showToast("Your wish is sent to the universe 💫");
  });

// Open romantic love letter
document.getElementById("envelope")
  .addEventListener("click", function () {
    this.classList.add("open");

    const letter = document.getElementById("love-letter");

    letter.classList.add("show");
    letter.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 350);

    for (let i = 0; i < 12; i++) {
      setTimeout(makeHeart, i * 100);
    }
  });

// Replay birthday surprise
document.getElementById("again-btn")
  .addEventListener("click", () => {
    candles.forEach(c => c.classList.remove("blown"));

    document.getElementById("wish-message").textContent =
      "Three little candles, one big wish ✨";

    document.getElementById("envelope")
      .classList.remove("open");

    const letter = document.getElementById("love-letter");

    letter.classList.remove("show");
    letter.setAttribute("aria-hidden", "true");

    document.getElementById("welcome")
      .scrollIntoView({ behavior: "smooth" });

    showToast("A fresh little beginning, just for you 💗");
  });
