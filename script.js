
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  }

  // Active navbar state
  let page = window.location.pathname.split("/").pop() || "index.html";
  if (page === "") page = "index.html";
  document.querySelectorAll("[data-nav]").forEach(link => {
    const target = link.getAttribute("data-nav");
    if ((page === "index.html" && target === "home") ||
        (page === "about.html" && target === "about") ||
        (page === "contact.html" && target === "contact") ||
        (page === "signup.html" && target === "signup") ||
        (page === "signin.html" && target === "signin")) {
      link.classList.add("active-nav");
    }
  });

  // Basic validation
  document.querySelectorAll("form[data-validate]").forEach(form => {
    form.addEventListener("submit", e => {
      let ok = true;
      form.querySelectorAll("[required]").forEach(field => {
        const err = form.querySelector(`[data-error-for="${field.name}"]`);
        if (!field.checkValidity()) {
          ok = false;
          field.classList.add("border-red-500");
          if (err) err.classList.remove("hidden");
        } else {
          field.classList.remove("border-red-500");
          if (err) err.classList.add("hidden");
        }
      });

      const p1 = form.querySelector('input[name="password"]');
      const p2 = form.querySelector('input[name="confirmPassword"]');
      if (p1 && p2 && p1.value !== p2.value) {
        ok = false;
        const err = form.querySelector('[data-error-for="confirmPassword"]');
        if (err) {
          err.textContent = "Passwords do not match.";
          err.classList.remove("hidden");
        }
      }

      if (!ok || form.dataset.demo === "true") e.preventDefault();
      if (ok && form.dataset.demo === "true") {
        const success = form.querySelector("[data-success]");
        if (success) success.classList.remove("hidden");
        form.reset();
      }
    });
  });

  // Small home interactions
  const temp = document.querySelector("#tempRange");
  const tempValue = document.querySelector("#tempValue");
  if (temp && tempValue) {
    temp.addEventListener("input", () => tempValue.textContent = `${temp.value}°`);
  }
});
