// https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects

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

function pintaapi(data){
  data.forEach((project) => {
    document.getElementById("Recent-Projects").innerHTML += `
        <div class="col col-20 project-1">
        <img class="rectangle71 " src="${project.image}" alt="Orbit section image" />
        <div class="text-rectangle">
          <h5 class="Body-Medium">${project.name}</h5>
          <p class="Headline-Regular">${project.description}</p>
          <a class="Headline-Regular" href="#">Learn More</a>
        </div>
      </div>`;
  });
   
}

function pintaproyecto(array, posicion){
  // console.log(array[posicion])
  // console.log("chu")
  const project = array[posicion]
  document.getElementById("Recent-Projects").innerHTML += `
  <div class="col col-20 project-1">
  <img class="rectangle71 " src="${project.image}" alt="Orbit section image" />
  <div class="text-rectangle">
    <h5 class="Body-Medium">${project.name}</h5>
    <p class="Headline-Regular">${project.description}</p>
    <a class="Headline-Regular" href="#">Learn More</a>
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
    

    // pintaproyecto(data,getVariableGetByName()["proyecto"])

    
    
    // pinta api a cascoporro
   
    pintaapi(data)
    //  console.log("chu")
    
    
  });
