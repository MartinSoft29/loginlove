/* ===============================
   LOGIN ESTÁTICO
================================ */
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const error = document.getElementById("error");

  // 👇 CAMBIA AQUÍ SI QUIERES
  if (user === "novia" && pass === "sanvalentin") {
    window.location.href = "card.html";
  } else {
    error.textContent = "Usuario o contraseña incorrectos 💔";
    error.style.color = "#ffb3b3";
  }
}
/* ===============================
   ANIMACIONES LOGIN
================================ */
document.addEventListener("DOMContentLoaded", () => {

  // Animación de la caja glass
  const loginBox = document.querySelector(".login-box");
  if (loginBox) {
    gsap.from(loginBox, {
      scale: 0.85,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Inputs uno por uno
    gsap.from(".login-box input", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.4,
      ease: "power2.out"
    });

    // Botón
    gsap.from(".login-box button", {
      y: 15,
      opacity: 0,
      duration: 0.6,
      delay: 0.9,
      ease: "power2.out"
    });
  }
});

/* ===============================
   TARJETA
================================ */
function sayYes() {
  const mensaje = document.getElementById("mensaje");
  const card = document.querySelector(".card-box");

  mensaje.innerHTML = "💖 Sabía que dirías que sí 💖<br>Te quiero mucho";

  gsap.fromTo(
    mensaje,
    { scale: 0.5, opacity: 0 },
    { scale: 1.2, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
  );

  gsap.to(card, {
    scale: 1.05,
    rotate: 2,
    duration: 0.6,
    yoyo: true,
    repeat: 1
  });

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    document.body.appendChild(heart);

    gsap.to(heart, {
      x: (Math.random() - 0.5) * window.innerWidth,
      y: (Math.random() - 0.5) * window.innerHeight,
      rotation: Math.random() * 360,
      opacity: 0,
      duration: 3,
      onComplete: () => heart.remove()
    });
  }
}

/* ===============================
   BOTÓN NO QUE HUYE
================================ */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 120) + "px";
  });
}
/* ===============================
   ANIMACIÓN CARD (ENTRADA)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.getElementById("mensaje");
  const buttons = document.querySelector(".buttons");

  if (mensaje) {
    gsap.from(mensaje, {
      y: -30,
      opacity: 0,
      duration: 1.4,
      ease: "elastic.out(1, 0.6)"
    });
  }

  if (buttons) {
    gsap.from(buttons.children, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.8,
      ease: "power2.out"
    });
  }
});
/* ===============================
   CORAZONES FLOTANTES ALEATORIOS
================================ */
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("floating-heart");
  corazon.innerHTML = "💖";

  document.body.appendChild(corazon);

  const size = Math.random() * 20 + 15;
  const startX = Math.random() * window.innerWidth;

  gsap.set(corazon, {
    x: startX,
    y: window.innerHeight + 50,
    fontSize: size,
    opacity: 0.8,
    position: "fixed",
    pointerEvents: "none",
    zIndex: 1
  });

  gsap.to(corazon, {
    y: -100,
    opacity: 0,
    duration: Math.random() * 4 + 4,
    ease: "none",
    onComplete: () => corazon.remove()
  });
}

// Genera corazones cada cierto tiempo
setInterval(crearCorazon, 600);
