const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");
const submite = document.getElementById("btn");



btn.onclick = function(){
    let key = fullname.value;
    console.log(key);

   let key1 = email.value;
   console.log(key1);

   let key2 = number.value;
   console.log(key2);
   let key3 = message.value;
   console.log(key3);

   
   localStorage.setItem("fullname",key);
   localStorage.getItem("fullname");
   localStorage.setItem("email",key1);
   localStorage.getItem("email");
   localStorage.setItem("number",key2);
   localStorage.getItem("number");
   localStorage.setItem("message",key3);
   localStorage.getItem("message");
  

//    if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount) + 1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   alert("Add a new student successfully!");
}