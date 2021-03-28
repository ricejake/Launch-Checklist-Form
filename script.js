// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

   window.addEventListener("load", function() {

const json = fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
    ).then((response) => 
    response.json().then((resonseJsonArray) => {
      console.log(resonseJsonArray);
      const div = document.getElementById("missionTarget");
      let webPage = '';
      const buildPlanetHtml = (planet) => {
        console.log(planet);
        return`
          <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planet.name}</li>
               <li>Diameter: ${planet.diameter}</li>
               <li>Star: ${planet.star}</li>
               <li>Distance from Earth: ${planet.distance}</li>
               <li>Number of Moons: ${planet.moons}</li>
           </ol>
          
          <img src="${planet.image}">
        `
        ;
    } 

   planet = resonseJsonArray[Math.round(Math.random() * resonseJsonArray.length)]
   const newHtml = buildPlanetHtml(planet);
   console.log(newHtml);
   webPage += newHtml;
   console.log('webpage', webPage);
   div.innerHTML = webPage;
  })
  )





      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotInput = document.querySelector("input[name=pilotName]");
         let coPilotInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         if (pilotInput.value === "" || coPilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            
         }
         if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) || !isNaN(pilotInput.value) || !isNaN(coPilotInput.value)){
               alert("Please enter the correct data types!");
               
            }

         let button = document.getElementById("formSubmit");
            button.onclick = () => {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${coPilotInput.value} is ready for launch.`;
            if(fuelLevelInput.value < 10000){
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("fuelStatus").innerHTML = `The fuel level of ${fuelLevelInput.value} is NOT enough for launch.`;
               document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch'
               document.getElementById("launchStatus").style.color = "red";
            }
            if(cargoMassInput.value > 10000){
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("cargoStatus").innerHTML = `The cargo load of ${cargoMassInput.value} is TOO heavy for launch.`;
               document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch'
               document.getElementById("launchStatus").style.color = "red";
            }
            else{
               document.getElementById("launchStatus").innerHTML = 'Shuttle is ready for launch'
               document.getElementById("launchStatus").style.color = "green";
            }
         }
         event.preventDefault();
      });
   });

   