//Convertimos en array las variables en el GET
function getVariableGetByName() {
  var variables = {};
  var arreglos = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      variables[key] = value;
    }
  );
  return variables;
}

function pintaproyecto(array, posicion) {
  const project = array[posicion];
 

      document.getElementById("Recent-Projects").innerHTML += `
      <div class="row">
      <img class="col col-100 imagen" src="${project.image}" alt="Orbit section image" />
      </div>
      <div class="row">
      <div class="col">
        <h1 class="">${project.name}</h1>
        <p class="">${project.content}</p>
        
      </div>
    </div>`;
}
fetch(
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    // encadenar if a muerta hasta que te junten las letras para evitar error
    // pinta api por id

    //

    pintaproyecto(data, getVariableGetByName()["uuid"]);
  });
