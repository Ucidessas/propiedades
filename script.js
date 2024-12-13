// script.js

// Ejemplo de propiedades (estas pueden ser obtenidas de un backend o base de datos)

const properties = [
  {
      id: 1,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczOJvngK6SOW6-G4L0D-ffoxxc0sK9iSWPCqu5LcUYUxHaVyFia-hlf094IS-Q51oSoIAoG0FzQdeKlanuOGDOSO9bF-Zqgccd-S1Ba6R0mxw4-KqWqw4z9LHectXm5-tyiJEil5IjvH34gLvLFN6hc=w641-h641-s-no-gm?authuser=0',
      title: 'Casa en la Zona Norte',
      description: 'Hermosa casa con 3 habitaciones y 2 baños.',
      price: '$120,000',
      location: 'Zona Norte',
  },
  {
      id: 2,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMNBbGN4xVS4Eneh_S6zc3b0icMeXJCjYT2k5zwOqLWOhwUqm4rK6ktv6cpY2QGk2eoMHxA9tQRa1tlVjOTn3MDLrPU1VpJmNyH0Lqc8KXQvZmhbzBNEZpB73TOmkAwql6RZPYaf_1PTgfk0jBkRBA=w641-h641-s-no-gm?authuser=0',
      title: 'Apartamento en el Centro',
      description: 'Apartamento céntrico con acceso a todos los servicios.',
      price: '$385,000',
      location: 'Centro',
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN825cGe0PUmZm5agaPfAcWSnVP8aS7cIeFaEKEtzM3Nkj7qrajonFUp33lygv-4x7uIRKE_PThwyK55NUuJ6T502TfKIr2Chc7OqUia_qcmkWADKWXmwsSafHlePQWgJLjY-HWxqPnfrXmlRawS5s=w641-h641-s-no-gm?authuser=0',
    title: 'Apartamento en el Centro3',
    description: 'Apartamento céntrico con acceso a todos los servicios.',
    price: '$285,000',
    location: 'Centro',
},
{
  id: 4,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczMgIO8pq5k3lUsKPCKqC1INV1CdPzfWg9oMn_LjpKuG-JqY1V1NPaxhbsuiv8JW1FNO6dFmjpKRKe3Lin3KyhRqjYRytTRR60pARcqhqonQCmsaz6TUcKlqyY9b5xbfdlW2SNOnNrSWnF952ZpTtEY=w641-h641-s-no-gm?authuser=0',
  title: 'Apartamento en el Centro1',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$805,000',
  location: 'Centro',
},
{
  id: 5,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczNf1Q-PhAmu_ldZW8TAnKdgTYaTj3kGTVkL1r60jLH7kPXWTH-b1iFTdPA6qpSxMkwCTR7DmDfYzE40ok77bjn_eQ-lsj1A-hjy-7oX0eFFuTYGNEnVYJj0i3oYevCtGfMLbxhCnB27MQlV3l4Ms7g=w641-h641-s-no-gm?authuser=0',
  title: 'Apartamento en el Centro2',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$195,000',
  location: 'Centro',
},
{
  id: 6,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczPiGsj_-GsBw_uQVWRdbtNHawrhgBWrWt2G9jZBtWWZNNWJ2FC4-SEiMD0FwuD2L1zd14YbQ43MmPKlYlJS1J_cenpQct5ovhdwUC4eSNn5tuQTWz7J10icC71lLqjcXI4yzFPTyUX7A77rep4wmVs=w641-h641-s-no-gm?authuser=0',
  title: 'casa sur',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$105,000',
  location: 'Zona Sur',
},
{
  id: 7,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczNIEa6pyI4ye_XZIy-MqbFm8XfBKDKNalmUQiooHqdvfUWnd0DJKLHmE2kUB9EpZWvJ6CtejnXvGuV0GqZxzoRqsDEBiQpgr96rjSBrr5xgdbY_-0PjiCSQOHy_6H3R0ttMPZFQQcpCmxP7kaRcZFs=w641-h641-s-no-gm?authuser=0',
  title: 'casa norte choco',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$90,000',
  location: 'Zona Sur',
},

{
  id: 8,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczMkkNpBpTB7Bn8DmvgzvLg9S_zQnPBr4CwamFy8y6d3Ybgn8KAxZkN_qUG_ebR1qxrqoUnEscQ_2tOOO7lXAcnpWv2Nn2dvDy5eFAY2kBFlx_NrwA6M7B-Afqm9gRT5G4dngEz3VJ3KFv9DMAQMuso=w641-h641-s-no-gm?authuser=0',
  title: 'casa norte choco',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$90,000',
  location: 'Zona Norte',
},

{
  id: 9,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczPSBPC0ZLLK2vqpaVXbZI7_OkJtKQEKWkXCMEOR9enOBZRLpa-4cxav6fA9eSPEnGMb9n7JYOQnjA0oRLgsmE8ZveFEnXdQY4uah0Ekdcoa64JgFIB3ZvxJ71DkTVyEsFsqs3nQ5-bdxzeGerFiTRk=w641-h641-s-no-gm?authuser=0',
  title: 'casa norte choco',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$90,000',
  location: 'Zona Sur',
},

{
  id: 10,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczNj3sFMB535VYnbTvkX7MxzLSzK-jVTfSpfyB1Mxb4sTQdiwfMkyWOX3vFwlysOUxnflHNhaanVNocmfsOujc4aQ6ICAmjLnXNwQWx4j3iD6IlUiSLsVbOR_oo0zEm-vJ70yzhQle0vj8SnA0HVpl4=w641-h641-s-no-gm?authuser=0',
  title: 'casa campo',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$900,000',
  location: 'Centro',
},
];


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
      alert("la data fue cargada directamente");
    })
    .catch((error) => console.error("Error al cargar el archivo:", error));
    //alert("la data fue NO 1111 esogida directamente");
});


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
                <p class="product-text">${property.description}</p>
                <button class="product-button">Comprar Ahora</button>
            </div>

             <div class="virtual-tour">
                <h3>Recorrido Virtual en ensamble</h3>
                
                    <img src="${property.foto1}" alt="Imagen 1">
                    <img src="${property.foto2}" alt="Imagen 2">
                
                    <img src="${property.foto3}" alt="Imagen 3">
                
                    <img src="${property.foto4}" alt="Imagen 4">
                
                <img src="${property.foto5}" alt="Imagen 5">
                <img src="${property.foto6}" alt="Imagen 6">
                <img src="${property.foto7}" alt="Imagen 7">
                <img src="${property.foto8}" alt="Imagen 8">
            
                
            </div>

           

            <div class="contact-section">
                <h4>Contactar al Vendedor</h4>
                <form>
                    <input type="text" placeholder="Tu Nombre" required>
                    <input type="email" placeholder="Tu Correo" required>
                    <input type="number" placeholder="Tu Telefono" required>
                    <input type="text" placeholder="Asesor" required>
                    <textarea placeholder="Tu Mensaje"></textarea>
                    <button type="submit" class="product-button">Enviar</button>
                </form>
            </div>
        </div>
   </div>

  `;

  // Mostrar la sección de detalles y ocultar la lista
  detailSection.style.display = "block";
  listSection.style.display = "none";
}

// Volver a la lista de propiedades
document.getElementById("backButton").addEventListener("click", () => {
  const detailSection = document.getElementById("property-detail");
  const listSection = document.getElementById("property-list");

  detailSection.style.display = "none";
  listSection.style.display = "block";
});



// Función para filtrar propiedades por ubicación
function filterProperties() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filtered = propertyData1.filter(property =>
      property.location.toLowerCase().includes(searchInput)
  );
  loadPropertyCards(filtered);
}



// Evento de búsqueda
document.getElementById('searchButton').addEventListener('click', filterProperties);