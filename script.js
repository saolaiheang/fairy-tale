const API_URL = "https://fairy-tale-h8ekmey95-siemhong.vercel.app/";

// GET /api/fairytales



// Simulated function to fetch fairy tales from API
function fetchFairyTales() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data from API
    setTimeout(() => {
      const fairyTales = [
        {
          title: "Cinderella",
          ageGroup: "Preschool",
          audioUrl: "cinderella.mp3",
        },
        {
          title: "Snow White",
          ageGroup: "Elementary",
          audioUrl: "snow_white.mp3",
        },
        // Add more fairy tales here
      ];
      resolve(fairyTales);
    }, 1000); // Simulate delay of 1 second
  });
}

// Function to display top fairy tale and age categories
async function displayHomePageContent() {
  try {
    const fairyTales = await fetchFairyTales();

    // Display top fairy tale
    const topFairyTaleContainer = document.querySelector("#topFairyTale");
    const topFairyTale = fairyTales[0]; // Assuming the first tale is the top one
    topFairyTaleContainer.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${topFairyTale.title}</h5>
              <p class="card-text">Age Group: ${topFairyTale.ageGroup}</p>
              <audio controls>
                <source src="${topFairyTale.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        `;

    // Display age categories
    const ageCategoriesContainer = document.querySelector("#ageCategories");
    const ageGroups = Array.from(
      new Set(fairyTales.map((tale) => tale.ageGroup))
    ); // Get unique age groups
    ageGroups.forEach((ageGroup) => {
      const talesInAgeGroup = fairyTales.filter(
        (tale) => tale.ageGroup === ageGroup
      );
      ageCategoriesContainer.innerHTML += `
            <li class="list-group-item">${ageGroup}</li>
          `;
    });
  } catch (error) {
    console.error("Error fetching fairy tales:", error);
  }
}

// Call displayHomePageContent function when the page loads
window.onload = displayHomePageContent;


function dataHome () {
  fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
  
  .then ((Response) => {
    return Response.json();
  })
  .then ((data) => {
    let count =1;
    let container =document.querySelector(".card-container");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="0-3") {
        if(count<=3) {
          container.innerHTML += `
      
          <div class="card1">
          <div class="image">
            <img src="${data[i].image}" alt="">
          </div>
          <div class="para"><h2>${data[i].title}</h2>
          <p style="font-size:12px; width:98%; margin-left:2%; margin-top:10px;">${data[i].summary}</p></div>
       
        </div>
          `
        }
        count++;
      }
    }

    count=1;
    let container1 =document.querySelector(".card-container1");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="4-6") {
        if(count<=3) {
          container1.innerHTML += `
      
          <div class="card1">
          <div class="image">
            <img src="${data[i].image}" alt="">
          </div>
          <div class="para"><h2>${data[i].title}</h2>
          <p style="font-size:12px; width:98%; margin-left:2%; margin-top:10px;">${data[i].summary}</p></div>
       
        </div>
          `
        }
        count++;
      }
    }
    count=1;
    let container2 =document.querySelector(".card-container2");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="7-12") {
          if(count<=3){
            container2.innerHTML += `
      
          <div class="card1">
          <div class="image">
            <img src="${data[i].image}" alt="">
          </div>
          <div class="para"><h2>${data[i].title}</h2>
          <p style="font-size:12px; width:98%; margin-left:2%; margin-top:10px;">${data[i].summary}</p></div>
          <div class="param">
        
        </div>
          `
          }
          count++;
      }
    }
  })
  .then ((error) => {
    console.error("error",error);
    return error;
  })
}

dataHome();