

// Variables globales
//let propertyData = [];

let propertyData1 = [];
// Cargar el archivo Excel al cargar la página

document.addEventListener("DOMContentLoaded", () => {
  fetch("./propiedades11.xlsx") // Archivo en la carpeta raíz
    .then((response) => response.arrayBuffer())
    .then((data1) => {
      const workbook1 = XLSX.read(new Uint8Array(data1), { type: "array" });
      const sheetName1 = workbook1.SheetNames[0];
      const sheetData1 = XLSX.utils.sheet_to_json(workbook1.Sheets[sheetName1]);

      propertyData1 = sheetData1;
      properties = propertyData1;
      
      loadPropertyCards(propertyData1);
      //displayProperties(propertyData1);
      //alert("la data fue cargada directamente");
    })
    .catch((error) => console.error("Error al cargar el archivo:", error));
    //alert("la data fue NO 1111 esogida directamente");
});

/*
document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Convertir los datos del archivo Excel a JSON
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Guardar los datos en la variable global y renderizar tarjetas
      propertyData1 = sheetData;
      loadPropertyCards(propertyData1);
    };

    reader.readAsArrayBuffer(file);
  }
});
*/
// Renderizar las tarjetas de propiedades
function loadPropertyCards(data) {
  const container = document.getElementById("propertyCards");
  container.innerHTML = ""; // Limpiar contenido previo

  data.forEach((property, index) => {
    const card = document.createElement("div");
    card.classList.add("property-card");
    card.innerHTML = `
     <img src="${property.image}" alt="${property.title}">
          <h3>${property.title}</h3>
          <p>${property.description}</p>
          <p><strong>Precio:</strong> ${property.price}</p>
          <p><strong>Ubicación:</strong> ${property.location}</p>
    `;

    // Agregar evento de clic para mostrar los detalles
    card.addEventListener("click", () => showPropertyDetail(property));
    container.appendChild(card);
  });
}

// Mostrar los detalles de una propiedad
function showPropertyDetail(property) {
  const detailSection = document.getElementById("property-detail");
  const listSection = document.getElementById("property-list");
  const detailContainer = document.getElementById("propertyDetailContainer");

  // Llenar el detalle con la información de la propiedad
  detailContainer.innerHTML = `

     <div class="virtual-tour">
                <h3>Propiedad</h3>
                <img src="${property.image}" alt="Foto portada propiedad">
            </div>


            <div class="product-description">
                <h2 class="product-title">${property.title}</h2>
                <p class="product-text"><strong>Descripción: </strong></p>
                <p class="product-text">${property.description}</p>
                <p class="product-text"><strong>Habitaciones: </strong> ${property.habita}</p>
                <p class="product-text"><strong>Baños: </strong> ${property.Bano}</p>
                <p class="product-text"><strong>Ubicación: </strong> ${property.location}</p>
                <a href="#contacto" class="super-button">Contactar Ahora</a> 
              
            </div>

             <div class="virtual-tour">
                <h3>Recorrido Virtual</h3>
                
                    <img src="${property.foto1}" alt="Imagen 1">
                    <img src="${property.foto2}" alt="Imagen 2">
                
                    <img src="${property.foto3}" alt="Imagen 3">
                
                    <img src="${property.foto4}" alt="Imagen 4">
                
                <img src="${property.foto5}" alt="Imagen 5">
                <img src="${property.foto6}" alt="Imagen 6">
                <img src="${property.foto7}" alt="Imagen 7">
                <img src="${property.foto8}" alt="Imagen 8">
            
                
            </div>

           
        </div>
   </div>

  `;

  // Mostrar la sección de detalles y ocultar la lista
  detailSection.style.display = "block";
  listSection.style.display = "none";
}


// Función para filtrar propiedades por ubicación
function filterProperties() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filtered = propertyData1.filter(property =>
      property.location.toLowerCase().includes(searchInput)
  );
  loadPropertyCards(filtered);
}


// Volver a la lista de propiedades
document.getElementById("backButton").addEventListener("click", () => {
  const detailSection = document.getElementById("property-detail");
  const listSection = document.getElementById("property-list");

  detailSection.style.display = "none";
  listSection.style.display = "block";
});






function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("numero").value,
    asesor: document.getElementById("asesor").value,
    mensaje: document.getElementById("mensaje").value,
  };

  const serviceID = "service_c8zuhnf";
  const templateID = "template_99q1mlz";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("asesor").value = "";
        document.getElementById("mensaje").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}




/*
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_olu055n";
  const templateID = "template_8wcdm7h";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
*/





// Evento de búsqueda
document.getElementById('searchButton').addEventListener('click', filterProperties);


loadPropertyCards(propertyData1);

