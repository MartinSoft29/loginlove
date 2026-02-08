/* =================================================
   LOGIN
================================================= */
if (document.body.classList.contains("login")) {

  function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const error = document.getElementById("error");

    if (user === "YayaAmorcito" && pass === "muñeca123") {
      window.location.href = "card.html";
    } else {
      error.textContent = "Usuario o contraseña incorrectos 💔";
      error.style.color = "#ffb3b3";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const loginBox = document.querySelector(".login-box");

    if (loginBox) {
      gsap.from(loginBox, {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(".login-box input", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.4
      });

      gsap.from(".login-box button", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        delay: 0.9
      });
    }
  });
}

/* =================================================
   CARD
================================================= */
if (document.body.classList.contains("card")) {

  function sayYes() {
    const mensaje = document.getElementById("mensaje");
    const card = document.querySelector(".card-box");
    const buttons = document.querySelector(".buttons");
    const photo = document.getElementById("photoContainer");

    mensaje.innerHTML =
      "💖 Quiero que este San Valentín sea muy bonito para nosotros 💖<br>Te amo muñeca";

    // Ocultar botones
    gsap.to(buttons, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      onComplete: () => buttons.style.display = "none"
    });

    // Animación del mensaje
    gsap.fromTo(mensaje,
      { scale: 0.6, opacity: 0 },
      { scale: 1.1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    );

    // Mostrar foto
    if (photo) {
      photo.style.display = "block";
     gsap.fromTo(photo,
      { opacity: 0, y: 20, scale: 0.85, rotate: -6 },
      { opacity: 1, y: 0, scale: 1, rotate: -2, duration: 1.2, ease: "power3.out" }
      );
    }

    // Latido
    gsap.to(card, {
      scale: 1.05,
      duration: 0.4,
      yoyo: true,
      repeat: 1
    });

    // Explosión de corazones
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = "50%";
      heart.style.top = "50%";
      heart.style.fontSize = Math.random() * 30 + 20 + "px";
      document.body.appendChild(heart);

      gsap.to(heart, {
        x: (Math.random() - 0.5) * window.innerWidth,
        y: (Math.random() - 0.5) * window.innerHeight,
        opacity: 0,
        duration: 3,
        onComplete: () => heart.remove()
      });
    }
  }

  // Botón NO que huye
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - 120) + "px";
    });
  }

  // Animación entrada card
  document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#mensaje", {
      y: -30,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.6)"
    });

    gsap.from(".buttons button", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      delay: 0.8
    });
  });

  // Corazones flotantes
  function crearCorazon() {
    const c = document.createElement("div");
    c.innerHTML = "💖";
    c.style.position = "fixed";
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.top = "100%";
    c.style.fontSize = Math.random() * 20 + 15 + "px";
    c.style.pointerEvents = "none";
    document.body.appendChild(c);

    gsap.to(c, {
      y: -100,
      opacity: 0,
      duration: Math.random() * 4 + 4,
      onComplete: () => c.remove()
    });
  }

  setInterval(crearCorazon, 700);
}
