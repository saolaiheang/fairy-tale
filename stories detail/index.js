// function fetchData(){
//     fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
//     .then((response) => {
//         return response.json();
        
//     })
//     .then ((data) => {
//         let card =
//     }
// }

// function fetchData(){
//     fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
//     .then((response) => {
//         return response.json();
//     })
//     .then ((data) => {
//         let card =document.getElementById("articleStories");
//         for(let i=0 ; i<1;i++) {
//             if(data[i].id) {
//                 card.innerHTML += `
              
            
//               <div class="image">
//               <div class="description">
//               <h1 class="card-title">${data[i].title}</h1>
//               <h5 class="card-text">${data[i].author}</h5>
//               <img  src="${data[i].image}" alt="">
//               <div class="card-body">
//                   <p class="card-text">${data[i].description}</p>
//                   <p class="card-text">${data[i].summary}</p>
//                   <p class="card-text"><audio controls>
//                   <source src="${data[i].audio}">
//                 </audio></p>
//                 </div>
//               </div>
                
              
//               </div>
              
          
          
                
//                 `;
//             }
//         }
//     })
//     .then ((error) => {
//         console.error('error:',error)
//     })
//     return fetchData;
// };

// fetchData();


let params = new URLSearchParams(document.location.search);
let id = params.get("id");

console.log(id);

let url = "https://fairy-tale-api-inky.vercel.app/api/fairytales";

// let urlpara = url+'?'+${data[i].id};
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const card = document.getElementById("detail");

      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          card.innerHTML += `
             
          <div class="image">
          <div class="description">
          <h1 class="card-title">${data[i].title}</h1>
          <h5 class="card-text">${data[i].author}</h5>
          <img  src="${data[i].image}" alt="">
          <div class="card-body">
              <p class="card-text">${data[i].description}</p>
              <p class="card-text">${data[i].summary}</p>
              <p class="card-text"><audio controls>
              <source src="${data[i].audio}">
            </audio></p>
            </div>
          </div>
            </div>`;
        }
      }
    
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));