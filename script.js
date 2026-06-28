const ctx = document.getElementById('myChart');
let box = document.querySelector(".form");
let open = document.querySelector(".btn3");
let close = document.querySelector(".close");
let dataset = document.querySelector(".dataset");
let formdiv = document.querySelector(".saveform");

let type = document.getElementById("type").value;
let description = document.getElementById("description").value;
let amount = document.getElementById("amount").value;
let date = document.getElementById("date").value;
let category = document.getElementById("category").value;





 
   

open.addEventListener("click",function(){
    box.style.display ="flex";
});

close.addEventListener("click",function(){
     box.style.display ="none";
})

formdiv.addEventListener("click",function(event){

//  event.preventDefault();   
    let value1 = event.target[0].value;
    let value2 = event.target[1].value;
    let value3 = event.target[2].value;
    let value4 = event.target[3].value;
    let value5 = event.target[4].value;
   
    if(value1.trim() === "" || value2.trim() === "" ||
value3.trim() === "" || value4.trim() === "" || value5.trim() === ""){
    alert("please fill in all field");
    return;
}

   dataset.innerHTML +=`<div class="data">
                <h5>${value1}</h5>
                <h5>${value2}</h5>
                <h5>${value3}</h5>
                <h5>${value4}</h5>
                <h5>${value5}</h5>
                <button><img style="height: 20px;" src="pencil.png" alt=""></button>
                <button><img style="height: 20px;" src="delete.png" alt=""></button>

              </div>`;

          form.reset();    
    
});

