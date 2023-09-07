document.querySelector("#_id").value = Math.random()
  .toString()
  .replaceAll("0.", "");

let input_fotos = document.getElementById("input-fotos");

let archivos = [];

input_fotos.addEventListener("change", (e) => {
  let input = e.target;

  archivos = [...archivos, ...input.files];

  function actualizarArchivos() {
    const dt = new DataTransfer();
    [...archivos].forEach((element) => {
      dt.items.add(element);
    });
    archivos = input.files = dt.files;
    console.log(archivos);
  }

  let previsualizaciones = document.querySelector(".previsualizaciones");
  previsualizaciones.innerHTML = "";

  let noMover = false;
  for (let i = 0; i < archivos.length; i++) {
    let archivo = archivos[i];
    let url = URL.createObjectURL(archivo);
    let div = document.createElement("div");
    div.style.backgroundImage = `url(${url})`;
    div.classList.add("miniatura");

    div.addEventListener("mousedown", (evt) => {
      if (div.querySelector(":hover")?.classList?.contains("eliminar")) {
        evt.preventDefault();
        return;
      }

      let px = div.getBoundingClientRect().left + window.scrollX;
      let py = div.getBoundingClientRect().top + window.scrollY;
      let ix = evt.clientX;
      let iy = evt.clientY;
      let index_init = [
        ...document.querySelectorAll(".previsualizaciones .miniatura"),
      ].indexOf(div);
      let div_temp = document.createElement("div");
      div_temp.classList.add("miniatura");
      div.parentNode.insertBefore(div_temp, div);

      div.style.position = "absolute";
      document.body.appendChild(div);

      div.style.zIndex = 1000;
      div.style.left = `${px}px`;
      div.style.top = `${py}px`;
      document.onmousemove = (evt) => {
        let fx = evt.clientX;
        let fy = evt.clientY;
        div.style.left = `${px + fx - ix}px`;
        div.style.top = `${py + fy - iy}px`;

        let miniaturas = [
          ...document.querySelectorAll(".previsualizaciones .miniatura"),
        ].filter((element) => element != div && element != div_temp);

        miniaturas.forEach((element, index) => {
          let ex = element.getClientRects()[0].x;
          let ey = element.getClientRects()[0].y;
          let ew = element.getClientRects()[0].width;
          let eh = element.getClientRects()[0].height;
          if (fx > ex && fx < ex + ew && fy > ey && fy < ey + eh) {
            if (fx > ex + ew / 2) {
              element.parentNode.insertBefore(div_temp, element);
            } else {
              let ns = element.nextSibling;
              if (ns) {
                element.parentNode.insertBefore(div_temp, ns);
              } else {
                element.parentNode.appendChild(div_temp);
              }
            }
          }
        });
      };
      document.onmouseup = (evt) => {
        let index_fin = [
          ...document.querySelectorAll(".previsualizaciones .miniatura"),
        ].indexOf(div_temp);

        document.onmousemove = null;
        div.onmouseup = null;
        div.style.removeProperty("opacity");
        div.style.removeProperty("position");
        div.style.removeProperty("left");
        div.style.removeProperty("top");
        div.style.removeProperty("z-index");
        div_temp.replaceWith(div);
        div_temp.remove();

        archivos = [...archivos];

        if (index_init < 0 || index_fin < 0) {
          return;
        }

        const element = archivos.splice(index_init, 1)[0];
        archivos.splice(index_fin, 0, element);

        actualizarArchivos();
      };
    });

    div_eliminar = document.createElement("div");
    div_eliminar.classList.add("eliminar");
    div_eliminar.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    div.appendChild(div_eliminar);

    div_eliminar.addEventListener("click", (evnt) => {
      const dt = new DataTransfer();
      archivos = [...archivos];
      archivos.splice(archivos.indexOf(archivo), 1);

      actualizarArchivos();

      div.remove();
    });

    previsualizaciones.appendChild(div);
  }
});
