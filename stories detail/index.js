let params = new URLSearchParams(document.location.search);
let id = params.get("id");


function fetchData() {
  fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let card = document.getElementById("articleStories");
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          card.innerHTML += `

        <div class="img">
               
            <div class="bloo">
              <h1 class="card-title">${data[i].title}</h1>
              <h5 class="card-text">${data[i].author}</h5>
              <img src="${data[i].image}" alt="">
            </div>
             
            <div class="card-body">
                  <p class="card-description">${data[i].description}</p>
                  <p class="card-summary">${data[i].summary}</p>
                  <p class="card-text"><audio controls>
                  <source src="${data[i].audio}">
                </audio></p>
            </div>

        </div>
           
          
                
                `;
        }
      }
    })
    .then((error) => {
      console.error("error:", error);
    });
  return fetchData;
}

fetchData();
