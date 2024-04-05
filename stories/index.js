let params = new URLSearchParams(document.location.search);
let age = params.get("age");

console.log(age);

let url = "https://fairy-tale-api-inky.vercel.app/api/fairytales";

// let urlpara = url+'?'+${data[i].id};
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const card = document.getElementById("url");

    if (age === "all") {
      for (let i = 0; i < data.length; i++) {
        card.innerHTML += `
               
                <div class="each-card">
                <div class="images"><img src="${data[i].image}"></img></div>
                <div class="txt">
                <a href='../stories detail/index.html?id=${data[i].id}'>${data[i].title}</a>
                <p>${data[i].summary}</p>
                <div class="txt2">
                <p>author’s name: ${data[i].author}</p>
                <p>Year : ${data[i].created_at}</p>
                </div>
                <audio controls>
                        <source src="${data[i].audio}" type="audio/mp3">
                      </audio>
                </div>
                </div>`;
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].age === age) {
          card.innerHTML += `
             
              <div class="each-card">
              <div class="images"><img src="${data[i].image}"></img></div>
              <div class="txt">
             <a href='../stories detail/index.html?id=${data[i].id}'>${data[i].title}</a>
              <p>${data[i].summary}</p>
              <div class="txt2">
              <p>author’s name: ${data[i].author}</p>
              <p>Year : ${data[i].created_at}</p>
              </div>
              <audio controls>
                      <source src="${data[i].audio}" type="audio/mp3">
                    </audio>
              </div>
              </div>`;
        }
      }
    }
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));