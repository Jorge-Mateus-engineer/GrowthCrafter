const allLinks = document.querySelectorAll("a:link");
const overlay = document.querySelector(".overlay-news");
const closeButton = document.querySelector(".close-btn");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Subir al inicio
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Navegar entre secciones
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Manejar links a paginas externas
    if (href !== "#" && !href.startsWith("#") && href.startsWith("http")) {
      window.location.href = href;
    }
  });
});

/*Controles del overlay de el newsletter */

window.addEventListener("load", (e) => {
  setTimeout(() => {
    overlay.classList.remove("hidden");
    document.documentElement.style.overflowY = "hidden";
    overlay.style.top = `${window.scrollY}px`;
  }, 5000);
});

closeButton.addEventListener("click", () => {
  overlay.style.top = `0px`;
  overlay.classList.add("hidden");
  document.documentElement.style.overflowY = "scroll";
});
