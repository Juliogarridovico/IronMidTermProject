// https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects

let apibody;

fetch(
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((project) => {
      document.getElementById("Recent-Projects").innerHTML += `
    <div id="project-1">
            <img class="rectangle71" src="${project.image}" alt="Orbit section image" />
            <div class="text-rectangle">
              <h5 class="Body-Medium">${project.name}</h5>
              <p class="Headline-Regular">${project.description}</p>
              <a class="Headline-Regular" href="#">Learn More</a>
            </div>
          </div>`;
      console.log(project);
    });
  });
