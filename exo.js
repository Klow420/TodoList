const form = document.querySelector("form");
const inputNom = document.querySelector("#inputNom");
const taskListContainer = document.querySelector("#taskListContainer");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const nomTache = inputNom.value;
    const task = document.createElement("div");
    task.classList.add("card", "text-white", "bg-primary", "mb-3", "w-25");
    task.innerHTML = `<div class="card-header">A faire</div>
    <div class="card-body">
      <p> ${nomTache} </p>
    </div>`;
    task.addEventListener("click",()=> {
        task.remove();
    });
    taskListContainer.appendChild(task);
    inputNom.value = "";
    localStorage.setItem("taskList", taskListContainer.innerHTML);

})
if (localStorage.getItem("taskList")) {
    taskListContainer.innerHTML = localStorage.getItem("taskList");
    const cards = document.querySelectorAll(".card");
    cards.forEach((task) => {
         task.addEventListener("click", ()=>{
             task.remove();
         });
     });
}