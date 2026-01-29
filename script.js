document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: "ease",
  });

const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(emailInput.value)) {
      e.preventDefault();

      emailError.textContent =
        "Veuillez entrer un email valide (ex: user@mail.com).";
      emailError.style.display = "block";

      // ⬇️ Laisse le temps au navigateur de finir le clic tactile
      setTimeout(() => {
        submitBtn.blur();
        emailInput.focus();
      }, 50);

    } else {
      emailError.style.display = "none";
    }
  });

  // Nettoyage si on revient via "Retour"
  window.addEventListener("pageshow", function (event) {
    if (
      event.persisted ||
      (window.performance && window.performance.navigation.type === 2)
    ) {
      form.reset();
      window.scrollTo(0, 0);
    }
  });

});
