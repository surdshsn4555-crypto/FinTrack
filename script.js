// if (!localStorage.getItem('isLoggedIn')) {
//     window.location.href = 'login.html';
// }

const ctx = document.getElementById('myChart');
let box = document.querySelector(".form");
let open = document.querySelector(".btn3");
let close = document.querySelector(".close");
let dataset = document.querySelector(".dataset");
let formdiv = document.querySelector("form");





open.addEventListener("click",function(){
    box.style.display ="flex";
});

close.addEventListener("click",function(){
     box.style.display ="none";
})

formdiv.addEventListener("submit",function(event){
    console.log("hello");
    

 event.preventDefault();   

let type = document.getElementById("type").value;
let description = document.getElementById("description").value;
let amount = document.getElementById("amount").value;
let date = document.getElementById("date").value;
let category = document.getElementById("category").value;

//  let value1 = event.target[0].value;
    // let value2 = event.target[1].value;
    // let value3 = event.target[2].value;
    // let value4 = event.target[3].value;
    // let value5 = event.target[4].value;let type = input1.value;
// let description = input2.value;
// let amount = input3.value;
// let date = input4.value;
// let category = input5.value;

// 
   
    if(type.trim() === "" || description .trim() === "" ||
amount.trim() === "" || date.trim() === "" || category.trim() === ""){
    alert("please fill in all field");
    return;
}

   dataset.innerHTML +=`<div class="data">
                <h5>${type}</h5>
                <h5>${description }</h5>
                <h5>${amount}</h5>
                <h5>${date}</h5>
                <h5>${category}</h5>
                <button><img style="height: 20px;" src="pencil.png" alt=""></button>
                <button><img style="height: 20px;" src="delete.png" alt=""></button>

              </div>`;

          formdiv.reset();    
    
});

