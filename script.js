const allLinks = document.querySelectorAll("a:link");

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

//Para atrapar las respuestas del formulario

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      document.getElementById("nombre").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("where").value =
        document.getElementById("where").options[0].value;
      document.getElementById("pago").value =
        document.getElementById("pago").options[0].value;
      alert("Formulario enviado exitosamente");
    });
  });
});
